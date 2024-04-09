# @bengineer.dev/eslint-config-react
[![npm version](https://badge.fury.io/js/@bengineer.dev%2Feslint-config-react.svg)](https://badge.fury.io/js/@bengineer.dev%2Feslint-config-react)

My personal opinionated eslint configuration that is prone to change as quickly as the seasons do 🍂

Comes in the following flavors:
- [@bengineer.dev/eslint-config-core](https://www.npmjs.com/package/@bengineer.dev/eslint-config-core)
- [@bengineer.dev/eslint-config-react](https://www.npmjs.com/package/@bengineer.dev/eslint-config-react) (this one)


## How to use

1. Install the package and its peer dependencies

```bash
npm install -D eslint @bengineer.dev/eslint-config-react
```

2. Extend this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```json
{
  "extends": "@bengineer.dev/react"
}
```
3. add your own flair to it 💅

## Example .eslintrc.json
```json
{
  "extends": ["@bengineer.dev/react"],
  "parser": "@typescript-eslint/parser"
}
```