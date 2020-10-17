# hacklang

This is a fork of [Sucrase](https://github.com/alangpierce/sucrase)

## Usage

See `./examples`. No examples work, really as of yet

## Contributing

```sh
git clone git@github.com:eankeen/hacklang-sucrace
cd hacklang-sucrase

pnpm i
pnpm i -D tslib
pnpm generate
pnpm build

# see generator/generateTokenTypes.ts, parser/tokenizer/types.ts,
# generator/generateReadWordTree.ts
# anything else if necessary, then modify that, and

pnpm generate
pnpm build
# test
node examples/sucrase-cli/input.js
```
