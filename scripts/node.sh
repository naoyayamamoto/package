npm i
./node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:gen/js --ts_out=service=gen/js --grpc_out=gen/js --plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin --proto_path=proto `find proto -name *.proto`
