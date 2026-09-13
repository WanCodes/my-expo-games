## Architecture and Planning

High-level plan and architecture for this React Native (Expo) app.

### 1. Product Vision

- **App purpose**: A small, focused multi-game arcade where users can quickly jump into simple casual games (starting with Tic-Tac-Toe) from a single Games Home hub.
- **Primary user flows**:
  - Flow 1: Launch app → Games Home → Select game → Play → Back to Games Home.
  - Flow 2: Launch app → Games Home → Try another game → Back to Games Home.
  - Flow 3: (Future) Launch app → Games Home → Explore “coming soon” games / features.

Update this section as the app concept becomes clearer.

### 2. Technical Architecture

- **Platform**: Expo + React Native + TypeScript.
- **State management**:
  - Start with `useState` / `useReducer` and simple context scoped to individual game screens.
  - Introduce a dedicated state library (e.g. Zustand/Redux) only when necessary (e.g. cross-game profile, high scores).
- **Navigation**:
  - Use **Expo Router** (file-based routing in `src/app`) as the primary navigation solution.
  - The Games Home lives at the root route `src/app/index.tsx`.
  - Each game gets its own route under `src/app/games`, e.g. `src/app/games/tic-tac-toe.tsx` → `/games/tic-tac-toe`.
  - Keep navigation patterns documented in `tasks/navigation-between-games.md` and evolve them as more games are added.
- **API / data layer**:
  - Centralize network calls in a `services` or `api` directory.
  - Use a single abstraction per external API (e.g. `userApi`, `authApi`).

### 3. Project Structure (Target)

Suggested structure as the app grows:

- `src/app` – navigation entry points and screens.
- `src/components` – reusable UI building blocks.
- `src/hooks` – shared React hooks.
- `src/constants` – theming, enums, and constants.
- `src/services` – API clients and data access.
- `src/utils` – small pure functions and helpers.
- `planning` – this folder, for docs and AI instructions.

Adjust naming and exact layout as needed, but keep the intent clear.

### 4. Roadmap (Fill in as You Go)

- **Phase 1 – Foundations**
  - Set up theming, typography, spacing system.
  - Implement initial navigation with Expo Router and the Games Home screen.
  - Implement first game: Tic-Tac-Toe.
- **Phase 2 – Core Features**
  - Add additional games using the `Game` interface and `GAMES` registry.
  - Introduce basic per-session stats (e.g. games played, wins).
- **Phase 3 – Polish and Performance**
  - Optimize slow screens.
  - Improve offline handling (if relevant).
  - Add animations and richer feedback between screens.

### 5. Non-Functional Requirements

- Performance: Smooth 60fps navigation where reasonable.
- Accessibility: Use accessible components and labels.
- Internationalization: Plan for future i18n (even if not implemented yet).

### 6. Decision Log

Record important architectural decisions here:

- **[2026-03-04]** Decision: Use Expo Router (file-based routing in `src/app`) as the navigation solution for the multi-game app. Games are represented via a shared `Game` interface and a `GAMES` registry so that adding new games is primarily a data change plus a new screen.
- **[YYYY-MM-DD]** Decision:

