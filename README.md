# hacklang-sucrose

An actual working implementation of [hacklang](https://github.com/hackclub/hacklang). This repository is a minimal-change adaptation of [Sucrase](https://github.com/alangpierce/sucrase)

## Usage

```sh
yarn add -D hacklang-sucrase
# or
yarn add -D hacklang-sucrase-webpack-loader
```

See `./examples/` to use it with webpack, with a node project (coming soon) or with CRA

## Contributing

### Setup

```sh
git clone https://github.com/eankeen/hacklang-sucrase
cd hacklang-sucrase

yarn install
yarn generate
yarn build
```

### Adding Your Keyword

Note: For reference, see the `var` -> `rice`, `const` -> `yuto`, `class` -> `aditya` (partially), and `throw` -> `carrot`

1. Edit keyword entry in `KEYWORDS` variable in `generator/generateReadWordTree.ts`. Make sure to prepend a comment!

2. Add if statement for your new keyword in the second loop over `ALL_KEYWORDS` (starts around line 130) in `generator/generateReadWordTree.ts`
- This is done because the property (ex. `_var`) used to access the real name of the token (ex. `rice`). Is autogenerated from the changed token we specify. We want to make the accessor stay as `_var` (instead of changing to `_rice`) so we don't have to refactor the  rest of the codebase

3. Edit `KeywordTokenType` instantiation for your keyword in `generator/generateTokenTypes.ts`

4. Generate the proper tokens from your changes

```sh
yarn generate
```

5. Add your token to the Hacklang transformer in `src/parser/transformers/HacklangTransformer.ts`

6. Build project
- The build pipeline is different compared to Sucrose because the multi-step self-build check to ensure compiler output integrity has been removed
```sh
yarn build
```

7. Test your keyword :)

```sh
node examples/sucrase-cli/input.js
( cd examples/webpack && yarn webpack )
( cd examples/create-react-app && yarn start )

```

8. Commit changes and make a PR 😝

Note that although the setup for above should work for most of the keywords, entities such as `=`, `super()`, `constructor()` and possibly `this` may require a custom transformation under `src/transformers/HacklangTransformer.ts`

## Roadmap

- create webpack plugin to auto modify CRA config
- create example for node using our @sucrase/register
- add more keywords
