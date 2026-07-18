export default [
  { ignores: [".next/**", "node_modules/**", "public/**", "coverage/**"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { ecmaVersion: "latest", sourceType: "module" },
    rules: { "no-unused-vars": "error", "no-undef": "error" }
  }
];
