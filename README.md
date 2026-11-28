# SPA Template

A GitHub template for bootstrapping new React projects. Choose **Use this template → Create a new repository**, then clone your new repository.

[Preview the template on GitHub Pages](https://pwlmc.github.io/spa-template/)

## Tech stack

- **React, TypeScript, and Vite** for the app and development server.
- **React Router** for Home, the design system showcase, and the interactive ok-fp example.
- **Custom design system** built with Base UI and StyleX, with shared Night Owl tokens, a light theme, and a persisted theme switcher.
- **[OK-FP](https://pwlmc.github.io/ok-fp/)** for typed functional effects. The unit-tested safe division example uses `Either` to reject invalid inputs, division by zero, and overflow.
- **[Morando architecture](https://morando.dev/)** for organizing code into domains and modules.
- **Vitest (jsdom for DOM specs) and Oxlint** for tests and linting.

## Getting started

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

Run `npm run format` to format code. Run `npm run lint`, `npm run format:check`, `npm test`, or `npm run build` locally. GitHub Actions runs lint and tests as separate jobs on pushes and pull requests.

## GitHub Pages

In **Settings → Pages**, select **GitHub Actions** as the source. The Pages workflow deploys on pushes to `main` only. It uses the site's configured base path and hash URLs so routes can be opened directly or refreshed on static hosting. Local development keeps regular browser URLs.
