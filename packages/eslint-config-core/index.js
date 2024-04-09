module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    './base.js',
    './import.js'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: { 'no-undef': 'off' }
    }
  ]
}
