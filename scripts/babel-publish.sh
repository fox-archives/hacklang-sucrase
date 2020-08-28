#!/bin/sh -eu

for dir in */; do
	cd "$dir"
		pnpm link
	cd ..
done
