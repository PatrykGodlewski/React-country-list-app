module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      { ts: "never", tsx: "never" },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
