# "Order Info App"

# Architecture details

All folders have `index.ts` files as the folder API.
This helps to encapsulate all the parts needed for internal development only.
Each component, method or constant should be imported only from `index.ts` and not from files directly.
If you need something outside of the folder, then it should be added to `index.ts`.

- `assets`
- `components` - reusable UI components without business logic
- `pages` - pages only, all the business logic should go to modules
- `mocks` - mock API calls for development and testing purposes
- `modules` divided by entity, so, for example, everything in the
Order folder can be easily changed or removed
    - `order` - the entity
        - `components` - components which are specific for this entity
        - `context` - all the contexts for this entity
        - `hooks` - all the hooks for this entity
        - `widgets` - widgets of this entity
- `services`
- `styles` - for shared style settings/helpers
  - `themes` - default design theme is here. Other themes can be added
  - `breakpoints.ts` - default breakpoints for the app
- `global.d.ts` - contains some frequently used types due to the small size of the app, but can be refactored if more types appear
- `test-utils.tsx` - contains all the utilities for test purposes, for example, adding wrappers for tests render. Tests functionality should be encapsulated here and imported from `test-utils.tsx` and not directly from a library

# Challenge comments

Some parts were simplified:
- styles and UI
- there are some tests as an example, but there should be many more
- the theme is used as an example and should be expanded with other variables

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
