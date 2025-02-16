package.json explained to abstraction

```json
{
  /* This Section ("Key Section") Defines :

  MetaData about you project, e.g,
  name: The project name.
  version: The version number of the project.
  private: Prevents accidental publishing.
  type: module: Enables ES modules (import/export).
   */

  "name": "vue-staging",
  "version": "0.0.0",
  "private": true,
  "type": "module",

  /* This Section ("scripts") Defines :
   shortcuts for running common tasks. */

  "scripts": {
    "dev": "vite",
    "build": "run-p type-check \"build-only {@}\" --",
    "preview": "vite preview",
    "test:unit": "vitest",
    "build-only": "vite build",
    "type-check": "vue-tsc --build",
    "lint": "eslint . --fix",
    "format": "prettier --write src/"
  },

  /* This section ("dependencies") Defines :
   code that runs on run time only should be in dependencies 
   Used at runtime – required for the app to function.
   Examples: Vue, Pinia, Vue Router.

  */

  "dependencies": {
    "pinia": "^2.3.1",
    "vue": "^3.5.13",
    "vue-router": "^4.5.0"
  },

  /* This Section ("devDependencies") Defines : 
  Used for development and build processes – not needed in production.
  Examples: Vite, TypeScript, ESLint, Prettier
  code that only runs for building and bundeling you project
  e.g. : vite,tailwind,typescript,  etc..   */

  "devDependencies": {
    "@tsconfig/node22": "^22.0.0",
    "@types/jsdom": "^21.1.7",
    "@types/node": "^22.10.7",
    "@vitejs/plugin-vue": "^5.2.1",
    "@vitest/eslint-plugin": "1.1.25",
    "@vue/eslint-config-prettier": "^10.1.0",
    "@vue/eslint-config-typescript": "^14.3.0",
    "@vue/test-utils": "^2.4.6",
    "@vue/tsconfig": "^0.7.0",
    "eslint": "^9.18.0",
    "eslint-plugin-vue": "^9.32.0",
    "jiti": "^2.4.2",
    "jsdom": "^26.0.0",
    "npm-run-all2": "^7.0.2",
    "prettier": "^3.4.2",
    "typescript": "~5.7.3",
    "vite": "^6.0.11",
    "vite-plugin-vue-devtools": "^7.7.0",
    "vitest": "^3.0.2",
    "vue-tsc": "^2.2.0"
  }
}
```
