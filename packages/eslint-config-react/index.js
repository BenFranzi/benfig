module.exports = {
  plugins: [
    'react',
    'eslint-plugin-react-hooks',
    'jsx-a11y',
    'react-refresh'
  ],
  env: {
    browser: true,
    node: false,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    '@bengineer.dev/core',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-no-undef': 'error',
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      multiline: 'first',
      ignoreCase: true,
      reservedFirst: true,
      locale: 'auto'
    }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': 'off',
    'react/no-unknown-property': 'error',
    'react/prop-types': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-curly-spacing': ['error', { when: 'always' }],
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    'react-refresh/only-export-components': ['error', { allowConstantExport: true }],
    'react/jsx-space-before-closing': ['error', 'always'],
    'import/no-nodejs-modules': [
      'error',
      {
        // No Node.js builtin modules.
        allow: [
          'querystring', // browserify
          'url', // browserify
        ],
      },
    ],
  }
};


