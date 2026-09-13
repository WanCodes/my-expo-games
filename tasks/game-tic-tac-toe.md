## Game: Tic-Tac-Toe – Detailed Tasks

Step-by-step instructions for implementing a **simple Tic-Tac-Toe game** as the first game in the multi‑game app.

### 1. Screen and Routing

1. Create a `TicTacToeScreen`:
   - File location aligned with your navigation setup (e.g. `src/app/games/tic-tac-toe.tsx` or similar).
2. Register the route with the navigation system so it can be opened from the Games Home screen.
3. Add a **header/title** like "Tic-Tac-Toe" and a back action to return to Games Home.

### 2. Core Game State

1. Represent the board as a 3x3 grid:
   - Use a 9‑element array or 2D array (e.g. `('X' | 'O' | null)[]`).
2. Track:
   - Current player (`'X'` or `'O'`).
   - Game status: `playing`, `won`, `draw`.
   - Winner (if any).
3. Initialize state when the screen mounts and when the user taps “Reset”.

### 3. Game Logic

1. Implement a function to handle moves:
   - Ignore taps on already-filled cells.
   - Place the current player's mark in the tapped cell.
   - Check for a winner after each move.
   - If no winner and no empty cells remain, mark the game as a draw.
   - Switch to the other player when appropriate.
2. Implement a `checkWinner` helper that:
   - Evaluates all win conditions (rows, columns, diagonals).
   - Returns `'X'`, `'O'`, or `null`.
3. Keep the logic separated from UI where possible (e.g. in a helper module or hook).

### 4. UI Layout

1. Use themed components (`ThemedView`, `ThemedText`, etc.) and existing spacing constants.
2. Layout:
   - A status area (e.g. “Player X’s turn”, “Player O wins!”, or “Draw”).
   - A 3x3 grid of tappable cells.
   - A reset button (“Play again”).
3. Ensure tap areas are big enough and visually clear.

### 5. Styling and Feedback

1. Use consistent colors and fonts from the app theme.
2. Visually distinguish:
   - X vs O (e.g. colors, shapes, or subtle styling differences).
   - Winning line (optional but nice to have).
3. Disable further moves once a winner is determined or a draw occurs (until reset).

### 6. Integration with Multi-Game App

1. Add Tic-Tac-Toe to the `GAMES` registry:
   - `id`: `"tic-tac-toe"`.
   - `name`: `"Tic-Tac-Toe"`.
   - `description`: Short explanation, e.g. "Classic 3x3 Tic-Tac-Toe".
   - `route`: The route or screen identifier.
2. Verify that:
   - The Games Home screen lists Tic-Tac-Toe.
   - Tapping it navigates to `TicTacToeScreen`.
   - Back navigation returns correctly to Games Home.

### 7. Testing and Polish

1. Manually test the game:
   - X wins in a row, column, diagonal.
   - O wins.
   - Draw scenario.
   - Reset button returns the board to initial state.
2. If a test framework is present, add simple unit tests for:
   - `checkWinner` logic.
   - Game state transitions for common scenarios.

