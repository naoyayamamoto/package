# Makefile

WEB_GRPC_VERSION=1.0.7
UNAME=$(shell tr '[A-Z]' '[a-z]' <<<`uname`)

.PHONY: all clean lint node php web go

all: clean node php web go

clean:
	@rm -rf gen

lint:
	@docker run --volume "$(pwd):/workspace" --workdir "/workspace" bufbuild/buf check lint

go:
	@mkdir -p gen/go
	@./node_modules/.bin/grpc_tools_node_protoc \
	--go_out=plugins=grpc:gen/go \
	--proto_path=proto \
	`find proto -name *.proto`

node_modules:
	@npm install

node: node_modules
	@mkdir -p gen/node
	@./node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:gen/node \
	--ts_out=gen/node \
	--grpc_out=gen/node \
	--plugin=protoc-gen-grpc=node_modules/.bin/grpc_tools_node_protoc_plugin \
	--plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts \
	--proto_path=proto \
	`find proto -name *.proto`

php: node_modules
	@mkdir -p gen/php
	@./node_modules/.bin/grpc_tools_node_protoc \
	--php_out=gen/php \
	--proto_path=proto \
	`find proto -name *.proto`

web: node_modules protoc-gen-grpc-web
	@mkdir -p gen/web
	@./node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:gen/web \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:gen/web \
	--plugin=protoc-gen-grpc-web=./protoc-gen-grpc-web \
	--proto_path=proto \
	`find proto -name *.proto`

protoc-gen-grpc-web:
	@wget -O protoc-gen-grpc-web -q https://github.com/grpc/grpc-web/releases/download/${WEB_GRPC_VERSION}/protoc-gen-grpc-web-${WEB_GRPC_VERSION}-${UNAME}-x86_64
	@chmod 755 protoc-gen-grpc-web
