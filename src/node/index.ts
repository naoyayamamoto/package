import {
  Server,
  ServerCredentials,
} from "grpc";
import {
  PackageAPIService
} from "@package/package/gen/node/package/v1/package_api_grpc_pb";
import { NpmService } from "./npm";

(() => {
  const server = new Server();
  server.bind(`0.0.0.0:50051`, ServerCredentials.createInsecure());
  server.addService(PackageAPIService, new NpmService());

  server.start();
})();
