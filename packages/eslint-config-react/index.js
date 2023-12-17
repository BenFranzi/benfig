module.exports = {
  "plugins": ["jsx-a11y"],
  "env": {
    "browser": true,
  },
  "extends": [
    '@bengineer.dev/core',
  ],
  rules: {
    "react/display-name": "off",
    "react/jsx-quotes": ["error", "single", "avoid-escape"],
    "react/jsx-no-undef": "error",
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
        "shorthandFirst": true,
        "multiline":"first",
        "ignoreCase": true,
        "reservedFirst": true,
        "locale": "auto"
    }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-multi-comp": "off",
    "react/no-unknown-property": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/self-closing-comp": "error",
    "react/wrap-multilines": "error",
    "react/jsx-curly-spacing": ["error", { "when": "always" }],
    "react/jsx-max-props-per-line": ["error", { "maximum": 3 }]
  }
}
