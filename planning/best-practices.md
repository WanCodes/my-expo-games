## Best Practices

Coding and UX guidelines for this React Native (Expo) project.

### 1. General Coding Guidelines

- **TypeScript first**:
  - Prefer explicit types for props, navigation params, and API data.
  - Avoid `any`; if used, document why.
- **Small, focused components**:
  - One main responsibility per component.
  - Extract reusable UI into shared components in `src/components`.
- **Clean imports and structure**:
  - Use absolute/alias imports when configured (e.g. `@/components/...`).
  - Avoid circular dependencies between modules.

### 2. React & Hooks

- Prefer function components with hooks.
- Derive state when possible instead of storing duplicates.
- Keep hooks at the top level; avoid conditional hook calls.
- Encapsulate complex logic in custom hooks (`src/hooks`).

### 3. Styling and Theming

- Use the existing theming system (`ThemedView`, `ThemedText`, theme constants).
- Centralize colors, spacing, and typography in `src/constants` or a theme module.
- Avoid inline style objects in JSX when re-used; extract into `StyleSheet.create`.

### 4. UX and UI

- Keep screens simple and focused on a single user goal.
- Ensure buttons and touch targets are large enough for mobile.
- Provide feedback on actions (loading states, disabled buttons, error messages).
- Test layouts on both small and larger devices.

### 5. Networking and Data

- Keep all API calls in a central `services` / `api` layer.
- Handle loading, error, and empty states explicitly in the UI.
- Avoid mixing networking logic directly inside presentational components.

### 6. Performance

- Avoid unnecessary re-renders:
  - Use `React.memo`, `useMemo`, and `useCallback` only when needed.
- Be careful with large lists:
  - Use `FlatList`/`SectionList` with proper `keyExtractor`.
- Defer non-critical work (e.g. analytics) until after initial render.

### 7. Git and Collaboration

- Keep commits small and descriptive.
- Write commit messages that explain **why** a change was made.
- Update docs in the `planning` folder when decisions are made.

