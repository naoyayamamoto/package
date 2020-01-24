# Makefile

WEB_GRPC_VERSION=1.0.7
UNAME=$(shell tr '[A-Z]' '[a-z]' <<<`uname`)

.PHONY: all clean lint node php web go

all: clean node php web go

clean:
	@rm -rf src/*/generated

lint:
	@docker run --volume "$(pwd):/workspace" --workdir "/workspace" bufbuild/buf check lint

go:
	@mkdir -p src/go/generated
	@./node_modules/.bin/grpc_tools_node_protoc \
	--go_out=plugins=grpc:src/go/generated \
	--proto_path=proto \
	`find proto -name *.proto`

node_modules:
	@npm install

node: node_modules
	@mkdir -p src/node/generated
	@./node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:src/node/generated \
	--ts_out=src/node/generated \
	--grpc_out=src/node/generated \
	--plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin \
	--plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts \
	--proto_path=proto \
	`find proto -name *.proto`

php: node_modules
	@mkdir -p src/php/generated
	@./node_modules/.bin/grpc_tools_node_protoc \
	--php_out=src/php/generated \
	--proto_path=proto \
	`find proto -name *.proto`

web: node_modules protoc-gen-grpc-web
	@mkdir -p src/web/generated
	@./node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:src/web/generated \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:src/web/generated \
	--plugin=protoc-gen-grpc-web=./protoc-gen-grpc-web \
	--proto_path=proto \
	`find proto -name *.proto`

protoc-gen-grpc-web:
	@wget -O protoc-gen-grpc-web -q https://github.com/grpc/grpc-web/releases/download/${WEB_GRPC_VERSION}/protoc-gen-grpc-web-${WEB_GRPC_VERSION}-${UNAME}-x86_64
	@chmod 755 protoc-gen-grpc-web
