#!/bin/sh -eu

# babel
cd babel && make build

# babel-loader
cd babel-loader && yarn clean && yarn build
