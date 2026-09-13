## Navigation Between Games – Tasks

Detailed tasks for setting up navigation so users can move between the **Games Home** screen and individual game screens (starting with Tic-Tac-Toe).

### 1. Choose and Configure Navigation

1. Confirm whether the project uses **Expo Router** or **React Navigation**.
2. If not already configured, set up the chosen navigation library following official docs.
3. Document the decision and reasoning in `planning/architecture-and-planning.md`.

### 2. Create the Games Home Screen

1. Create a `GamesHomeScreen` (or equivalent route):
   - Displays a list of games from a shared `GAMES` registry.
   - Each list item includes:
     - Game name.
     - Short description.
     - A “Play” button or tappable row.
2. Ensure this screen is the **initial route** when the app launches.

### 3. Define Game Routes

1. For each game, define a dedicated route/screen:
   - First: `TicTacToeScreen` route (e.g. `/games/tic-tac-toe` or similar).
2. Name routes and files consistently:
   - Routes like `games/tic-tac-toe`, `games/rock-paper-scissors`, etc.
3. Expose a friendly title for each route to display in headers.

### 4. Wire Navigation Actions

1. In `GamesHomeScreen`, map over the `GAMES` registry:
   - On tap or “Play”, navigate to the corresponding game route.
2. In each game screen:
   - Add a clear way to navigate **back to Games Home** (e.g. header back button or in‑screen “Back to Games”).
3. Verify that:
   - Navigation back and forth does not reset the entire app unnecessarily.

### 5. Consistent UX and Theming

1. Ensure navigation headers (titles, colors, fonts) follow the app’s theme.
2. Use consistent animations and transitions between screens.
3. Make sure navigation works well on:
   - iOS
   - Android
   - Web (if web is part of the target).

### 6. Testing Navigation

1. Manually verify:
   - App opens on Games Home.
   - Tapping Tic-Tac-Toe navigates to the correct screen.
   - The back action correctly returns to Games Home.
2. Add basic tests (if test setup exists) for:
   - Route existence.
   - Navigation from Games Home to Tic-Tac-Toe and back.

