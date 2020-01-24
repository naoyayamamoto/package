import {
  Server,
  ServerCredentials,
  sendUnaryData,
  ServerUnaryCall,
  status
} from "grpc";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import npmUserPackages from "npm-user-packages";
import npmUser from "npm-user";

import {
  PackageRequest,
  PackageResult,
  PackageManager,
  Profile,
  Package
} from "../generated/package/v1/package_api_pb";
import {
  PackageAPIService,
  IPackageAPIServer
} from "../generated/package/v1/package_api_grpc_pb";

class PackageService implements IPackageAPIServer {
  getPackage(
    call: ServerUnaryCall<PackageRequest>,
    callback: sendUnaryData<PackageResult>
  ) {
    const name = call.request.getName();
    const response = new PackageResult();
    response.setDomain(`https://www.npmjs.com/~${name}`);
    response.setPackageManager(PackageManager.NPM);

    const profile = new Profile();
    Promise.all([npmUser(name), npmUserPackages(name)]).then(
      result => {
        const user = result[0];
        if (user.name) {
          profile.setName(user.name);
        }
        if (user.email) {
          profile.setEmail(user.email);
        }
        if (user.avatar) {
          profile.setAvatar(user.avatar);
        }
        response.setProfile(profile);

        result[1].forEach(p => {
          const pack = new Package();
          pack.setId(p.name);
          pack.setName(p.name);
          const timestamp = new Timestamp();
          timestamp.fromDate(new Date(p.date));
          pack.setDate(timestamp);
          pack.setKeywordList(p.keywords);
          const links = new Package.Links();
          links.setPackage(p.links.npm);
          if (p.links.homepage) {
            links.setHomepage(p.links.homepage);
          }
          if (p.links.repository) {
            links.setRepository(p.links.repository);
          }
          if (p.links.bugs) {
            links.setBugs(p.links.bugs);
          }
          pack.setLinks(links);
          response.addPackage(pack);
        });
        callback(null, response);
      },
      err => {
        callback(
          {
            code: status.NOT_FOUND,
            name: "Not Found",
            message: `User ${name} doesn't exist`,
            details: err
          },
          null
        );
      }
    );
  }
}

(() => {
  const server = new Server();
  server.bind(`0.0.0.0:50051`, ServerCredentials.createInsecure());
  server.addService(PackageAPIService, new PackageService());

  server.start();
})();
