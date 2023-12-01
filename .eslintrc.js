module.exports = {
  parser: "babel-eslint", // Using babel-eslint parser for parsing JavaScript code
  extends: ["eslint:recommended", "plugin:react/recommended"], // Using recommended eslint and react rules
  plugins: ["react"], // Enable eslint-plugin-react for React-specific rules

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
};
