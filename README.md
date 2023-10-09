# Vue 3 boilerplate

## Features
- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [npm](https://www.npmjs.com/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- [File based routing](./src/pages)

- [Components auto importing](./src/components)

- [State Management via Pinia](https://pinia.vuejs.org/)

- [Layout system](./src/layouts)

- [I18n ready](./locales)

- [Component Preview](https://github.com/johnsoncodehk/vite-plugin-vue-component-preview) (coming soon)

- Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- Validation: [Vee-validation](https://vee-validate.logaretm.com/v4/) + [yup](https://github.com/jquense/yup)

- Query: [vue-query](https://vue-query.vercel.app/#/)

- Built middleware + authenticate

- Unit Testing with [Vitest](https://github.com/vitest-dev/vitest), E2E Testing with [Cypress](https://cypress.io/)


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```
