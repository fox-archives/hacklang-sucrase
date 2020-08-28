#!/bin/bash -eu

set -o pipefail

cd babel-loader
	yarn link || true
cd ..

cd babel/packages
for dir in */; do
	echo "linking $dir"
	cd "$dir"
		yarn link || true
	cd ..
done
cd ../..

echo 'done'



# cd babel-loader
# yalc publish --push
# cd ..

# cd babel/packages
# for dir in */; do
# 	cd "$dir"
# 	yalc publish --push
# 	cd ..
# done
# cd ../..

# cd examples/webpack-example
# yalc link @hacklang-babel/babel-loader
# yalc link @hacklang-babel/core




# if ((BASH_VERSINFO[0] < 4))
# then
#   echo "Need bash 4 to continue"
#   exit 1
# fi

# mkdir -p examples/webpack-example/node_modules/@babel
# mkdir -p examples/webpack-example/node_modules

# wpFolder="examples/webpack-example/node_modules"

# root() {
# 	echo "$(pwd)/$1"
# }

# # shellcheck disable=SC2155
# declare -A symlinks="(
# 	[\"$(root babel)\"]=\"$wpFolder/@hacklang-babel/core\"
# 	[\"$(root babel-loader)\"]=\"$wpFolder/babel-loader\"
# )"

# for key in "${!symlinks[@]}"
# do
# 	value="${symlinks["$key"]}"

#    echo "key: $key"
# 	echo "value: $value"

# 	mkdir -p "$(dirname "$value")"
# 	unlink "$value"
# 	ln -sf "$key" "$value"
# done
