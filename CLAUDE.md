# Architecture

Follow [Morando architecture](https://morando.dev/). Organize source as `src/<Domain>/<Module>/...`: PascalCase domains contain only PascalCase modules. Keep modules flat; optional layer folders are not nested.

Use the layer order `defs → ops → ui → main`. Files may import from the same or a lower layer only. Keep file and module dependencies acyclic. Components, pages, StyleX tokens, and UI tests belong to `ui`; app routing and startup belong to the `main` layer.

## Operations

Write operations (`ops`) logic in a functional style. Keep transformations pure and compose them with `map` and `flatMap`. Use `ok-fp` effects to model absence (`Option`), typed failures (`Either`), accumulated validation errors (`Validation`), and asynchronous work (`Task` or `TaskEither`). Handle those outcomes at the caller or UI boundary.

# Imports

Use `@/` (the `src/` root) across module boundaries, even within the same domain. Use relative imports such as `./HomePage` within a module.
Import directly from implementation files (e.g. `@/DesignSystem/Button/Button`); do not create or use index barrels or re-export-only modules.

# Tests

Start each test name with `should`, including parameterized tests: `it("should ...")` and `it.each(cases)("should ...")`.

Name test files `*.spec.ts`, or `*.spec.tsx` if they contain JSX.
