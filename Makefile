# Makefile
gen: clean
	# docker run -v `pwd`:/defs namely/protoc-all -l gogo -o gen/go -i proto -d proto
	# docker run -v `pwd`:/defs namely/protoc-all -l php -o gen/php -i proto -d proto
	# docker run -v `pwd`:/defs namely/protoc-all -l node -o gen/js -i proto -d proto --with-typescript
	mkdir -p gen/js
	docker run -v `pwd`:/defs --entrypoint ls namely/protoc-all
	# docker run -v `pwd`:/defs namely/protoc-all -l web -o gen/web -i proto -d proto

clean:
	rm -rf gen
