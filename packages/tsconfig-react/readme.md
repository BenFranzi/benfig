# @bengineer.dev/tsconfig-react

### Example tsconfig.json
#### General
```json
{
  "extends": "@bengineer.dev/tsconfig-react",
  "conpilerOptions": {
    "sourceMap": true
  },
  "include": ["src"]
}
```


#### Vite

```json
{
  "extends": "@bengineer.dev/tsconfig-react",
  "conpilerOptions": {
    "sourceMap": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src", "vite.config.ts"]
}
```