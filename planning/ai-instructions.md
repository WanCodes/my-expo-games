## AI Instructions for This App

These guidelines are for any AI agent helping with this React Native (Expo) project.

### Core Principles

- **Match the existing stack**: Use Expo, React Native, and TypeScript.
- **Prefer incremental changes**: Small, focused PRs and commits over big rewrites.
- **Keep the app shippable**: Avoid breaking the demo screen or navigation.
- **Follow the planning docs**: Align with `architecture-and-planning.md`, `best-practices.md`, and `design-patterns.md`.

### When Implementing Features

- **Align with goals**:
  - Check `architecture-and-planning.md` for app goals and roadmap.
  - Prefer implementing or improving existing patterns before introducing new ones.
- **Type safety**:
  - Use TypeScript types and interfaces for props, navigation params, and API models.
  - Avoid `any` unless absolutely necessary and document why.
- **UI and UX**:
  - Reuse shared components (e.g. themed text/views) instead of duplicating styles.
  - Keep layouts responsive across phones and small tablets.
  - Respect platform-specific differences (iOS vs Android vs Web).

### When Changing Code

- **Do not** silently remove or rewrite existing behavior unless:
  - It is clearly unused, or
  - There is a documented decision in `architecture-and-planning.md`.
- **Prefer composition over duplication**:
  - Extract shared logic into small utilities or hooks.
  - Extract shared UI into components.
- **Document non-obvious decisions**:
  - Use short comments to explain *why* something is done, not *what* it does.

### Testing and Quality

- Add or update tests when modifying important business logic (if/when a test setup is present).
- Run basic sanity checks:
  - App builds and starts (native and/or web as applicable).
  - New screens are reachable via navigation.

### File and Folder Organization

- Keep screens, components, and utilities well separated.
- Prefer clear names:
  - Screens: `FeatureNameScreen.tsx`.
  - Components: `FeatureThing.tsx` or `SharedThing.tsx`.
  - Hooks: `useFeatureThing.ts`.

### How to Use This Folder

- Before a large feature or refactor:
  - Update `architecture-and-planning.md` with goals and constraints.
  - Check `design-patterns.md` to reuse existing solutions.
- After changes:
  - Reflect any new decisions here so future AIs and humans stay aligned.

