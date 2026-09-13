## Multi-Game App – Overview Tasks

High-level tasks for turning this project into a **multi-game app** with navigation between games.

### 1. Set Up Core Structure

1. Confirm navigation solution (Expo Router or React Navigation) and document the choice in `planning/architecture-and-planning.md`.
2. Create a **Games Home** screen:
   - Shows a list of available games (starting with Tic-Tac-Toe).
   - Each game entry has a title, short description, and "Play" button.
3. Ensure the app’s initial route points to the Games Home screen.

### 2. Define Game Abstraction

1. Create a simple `Game` interface in a shared location (e.g. `src/types/game.ts`):
   - `id` (string)
   - `name` (string)
   - `description` (string)
   - `route` or handler for navigation.
2. Create a `GAMES` registry (e.g. `src/constants/games.ts`) listing all games:
   - Start with a single Tic-Tac-Toe entry.
   - Make it easy to add new games later by adding entries to this registry.

### 3. Navigation Between Games

1. For each game, define a dedicated route/screen (e.g. `TicTacToeScreen`).
2. Wire the Games Home list so that tapping "Play" navigates to the corresponding game screen.
3. Ensure there is a consistent "Back to Games" action from every game screen.
4. Document the navigation pattern in `tasks/navigation-between-games.md`.

### 4. Game Implementation Tasks

1. Implement the first game: **Tic-Tac-Toe** (see `tasks/game-tic-tac-toe.md`).
2. After Tic-Tac-Toe, use the same patterns to add new games:
   - Create a new screen for the game.
   - Add the game to the `GAMES` registry.
   - Add any game-specific components in a `src/games/<game-name>` or similar folder.

### 5. UX and Polish

1. Design a simple but attractive Games Home screen:
   - Use existing theming/components where possible.
   - Include a short tagline or description for the app.
2. Ensure consistent headers, titles, and theming across all game screens.
3. Add simple feedback for unavailable games (e.g. disabled / “coming soon” entries).

### 6. Documentation Updates

1. Update `planning/architecture-and-planning.md` with:
   - The multi-game concept.
   - The chosen navigation strategy.
   - The structure for games and future extensibility.
2. Keep this file in sync as games are added or patterns change.

