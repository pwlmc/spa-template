# Architecture

Follow [Morando architecture](https://morando.dev/). Organize source as `src/<Domain>/<Module>/...`: PascalCase domains contain only PascalCase modules. Keep modules flat; optional layer folders are not nested.

Use the layer order `defs → ops → ui → main`. Files may import from the same or a lower layer only. Keep file and module dependencies acyclic. Components, pages, StyleX tokens, and UI tests belong to `ui`; app routing and startup belong to the `main` layer.

# Imports

Use `@/` (the `src/` root) across module boundaries, even within the same domain. Use relative imports such as `./HomePage` within a module.
Import directly from implementation files (e.g. `@/DesignSystem/Button/Button`); do not create or use index barrels or re-export-only modules.
