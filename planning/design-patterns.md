## Design Patterns

Recommended patterns for structuring this React Native (Expo) app.

### 1. Screen Pattern

- **Structure**:
  - Top-level screen component responsible for:
    - Fetching or wiring data.
    - Orchestrating navigation.
    - Composing smaller presentational components.
- Keep business logic in hooks and services, not deeply in JSX.

### 2. Container / Presentational Split

- **Container components**:
  - Handle data loading, state, and side effects.
  - Live in `src/app` or feature-specific folders.
- **Presentational components**:
  - Receive all data via props.
  - Live in `src/components` and remain reusable.

### 3. Hooks for Reusable Logic

- Encapsulate cross-cutting logic (e.g. auth state, forms, feature toggles) in hooks:
  - `src/hooks/useAuth.ts`
  - `src/hooks/useFeatureX.ts`
- Hooks should:
  - Return simple values and callbacks.
  - Avoid direct UI rendering.

### 4. Theming and Layout

- Use a consistent spacing and typography scale from a central theme.
- Avoid hard-coded colors and spacing values inside components.
- Wrap screens in themed layout components (like `ThemedView`, `SafeAreaView`).

### 5. Navigation

- Centralize navigation configuration:
  - Keep routes and stacks in a small number of files.
  - Name routes clearly (`Home`, `Profile`, `Settings`, etc.).
- Pass only the data needed through navigation params; use IDs when possible.

### 6. Error and Loading Handling

- Use shared components for:
  - Loading indicators (e.g. `LoadingSpinner`).
  - Error messages (e.g. `ErrorState` with retry button).
- Ensure every API-backed screen has:
  - Loading state.
  - Error state.
  - Empty state.

### 7. Extensibility Pattern

- When adding new features:
  - Prefer adding new screens/components/hooks rather than overloading old ones.
  - Keep feature-specific logic close together.
- When refactoring:
  - Maintain backward compatibility where possible.
  - Update the `planning` docs to record major pattern changes.

