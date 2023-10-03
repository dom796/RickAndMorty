module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
    "max-len": "off",
    quotes: "off",
    "linebreak-style": "off",
    "prefer-arrow-callback": "off",
    "no-undef": "off",
    "func-names": ["error", "never"],
    "no-use-before-define": "off",
    camelcase: "off",
    "prefer-destructuring": "off",
    "arrow-body-style": "off",
    "no-unused-vars": "off",
    "react/prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "import/extensions": "off",
  },
};
