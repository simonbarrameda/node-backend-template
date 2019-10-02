module.exports =  {
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true,
      'jsx': true
    }
  },
  'rules': {
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'dot-location': ['error', 'property'],
    'eqeqeq': ['error', 'smart'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'indent': ['error', 2],
    'key-spacing': ['error', { 'mode': 'strict' }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-multi-spaces': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
    'prefer-const': 'error',
    'prefer-promise-reject-errors': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': 'warn',
    'semi-style': 'error'
  }
}
