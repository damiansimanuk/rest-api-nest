module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },  
  plugins: ['@typescript-eslint/eslint-plugin', "prettier"],
  extends: [  
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off', 
    // '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "linebreak-style": ["error", "unix"], 
    "no-use-before-define": "error",
    "prefer-const": "error",
    "curly": "error",  
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE"]
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ],
    "prettier/prettier": ["error",
      {
        "parser": "typescript",
        "trailingComma": "none",
        "tabWidth": 2,
        "semi": false,
        "printWidth": 100,
        "singleQuote": false,
        "bracketSpacing": true
      }
    ]
  },
};
