export default {
  extends: ['eslint:recommended'],
  rules: {
    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    'no-console': 'error',

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------
    'complexity': ['warn', 10],
    'curly': ['error', 'all'],
    'yoda': 2,

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    'no-shadow': 1,
    'no-unused-vars': [2, { argsIgnorePattern: '^_' }],

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'max-len': [
      2,
      {
        code: 140,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'max-nested-callbacks': ['error', { max: 3 }],
    'max-params': ['error', { max: 5 }],
    'max-statements-per-line': ['error', { max: 1 }],
    'no-lonely-if': 2,
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'operator-linebreak': ['error', 'before'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: ['import'], next: '*' },
      { blankLine: 'any', prev: ['import'], next: ['import'] },
    ],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'require-jsdoc': 'off',
    'space-before-function-paren': [
      2,
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': 'error',
    'space-unary-ops': 'error',
    'space-infix-ops': 'error',
    'indent': ['error', 2, {
      CallExpression: {
        arguments: 1,
      },
      FunctionDeclaration: {
        body: 1,
        parameters: 1,
      },
      FunctionExpression: {
        body: 1,
        parameters: 1,
      },
      MemberExpression: 1,
      ObjectExpression: 1,
      SwitchCase: 1,
      ignoredNodes: [
        'ConditionalExpression',
      ],
      flatTernaryExpressions: false,
      offsetTernaryExpressions: false,
      ignoreComments: false,
    }],

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-template': 'error',
  }
};
