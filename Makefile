# Makefile
generate:
	docker run -v "$(pwd):/work" uber/prototool prototool generate

buf:
	docker run --volume "$(pwd):/workspace" --workdir /workspace bufbuild/buf check lint
