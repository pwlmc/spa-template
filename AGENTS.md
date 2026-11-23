# Architecture

Read and apply the [Morando skill](.agents/skills/morando/SKILL.md) when adding, moving, or reviewing code.

Source root: `src/`. Import alias: `@/`.

Use the Morando React layer order: `defs`, `ops`, `hooks`, `components`, `pages`, `main` (lowest to highest). App routing and startup belong to `main`. `DesignSystem` is a platform domain.

## Operations

Write operations (`ops`) logic in a functional style. Keep transformations pure and compose them with `map` and `flatMap`. Use `ok-fp` effects to model absence (`Option`), typed failures (`Either`), accumulated validation errors (`Validation`), and asynchronous work (`Task` or `TaskEither`). Handle those outcomes at the caller or UI boundary.

# Imports

Do not create or use re-export-only modules.

# Tests

Start each test name with `should`, including parameterized tests: `it("should ...")` and `it.each(cases)("should ...")`.

Name test files `*.spec.ts`, or `*.spec.tsx` if they contain JSX.
