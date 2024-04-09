# @bengineer.dev/eslint-config

My personal opinionated eslint configuration that is prone to change as quickly as the seasons do 🍂

Comes in the following flavors:
- [@bengineer.dev/eslint-config-core](https://www.npmjs.com/package/@bengineer.dev/eslint-config-core)
- [@bengineer.dev/eslint-config-react](https://www.npmjs.com/package/@bengineer.dev/eslint-config-react)


## How to use

1. Install the package and its peer dependencies

```bash
npm install -D eslint @bengineer.dev/eslint-config-<flavor>
```

2. Extend this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring)

```json
{
  "extends": "@bengineer.dev/<flavor>"
}
```
3. add your own flair to it 💅

## Example .eslintrc.json
```json
{
    "extends": ["@bengineer.dev/<flavor>"],
    "parser": "@typescript-eslint/parser",
    "env": {
        "jest": true
    },
    "overrides": [
        {
            "files": ["io.ts"],
            "rules": { "no-console": "off" }
        }
    ]
}
```