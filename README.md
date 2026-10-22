# Wan's Game Arcade

[![Expo](https://img.shields.io/badge/Expo-SDK%2055-000020?logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React%20Native-0.83-20232A?logo=react&logoColor=61DAFB)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A local arcade for iOS, Android, and web. One home screen lists the catalog; each game is its own screen. Built with Expo, React Native, and TypeScript.

**Wan Yau** · London · [github.com/WanCodes](https://github.com/WanCodes)

## Overview

Wan's Game Arcade is a small multi-game shell. The home screen reads a typed `GAMES` registry and opens each playable entry with Expo Router. The first game is local two-player Tic-Tac-Toe. Board state stays in that game's hook for the current session.

The on-screen title is **Wan's Game Arcade**. The Expo project name, slug, and npm package name are still `my-first-expo`.

Design notes (architecture, patterns, and a decision log) live in [`planning/`](planning/architecture-and-planning.md). Step-by-step build notes live in [`tasks/`](tasks/README.md).

## Games

### Tic-Tac-Toe

Route: `/games/tic-tac-toe` · screen: [`src/app/games/tic-tac-toe.tsx`](src/app/games/tic-tac-toe.tsx) · rules: [`src/app/games/useTicTacToe.ts`](src/app/games/useTicTacToe.ts)

- Classic 3×3 grid, X then O, on one device.
- Wins are checked on rows, columns, and both diagonals.
- A full board with no winner is a draw.
- The status line shows whose turn it is, who won, or that the game is a draw.
- **Play again** clears the board and returns the turn to X.
- **Back to games** navigates to the home catalog.
- Taps on a filled cell, or any cell after a win or draw, are ignored.
- Each cell has an accessibility label (`Cell 1` through `Cell 9`).

### Catalog

Playable games are declared in [`src/constants/games.ts`](src/constants/games.ts) against the `Game` type in [`src/types/game.ts`](src/types/game.ts): `id`, `name`, `description`, `route`, and an optional `comingSoon` flag.

The home list ([`src/app/index.tsx`](src/app/index.tsx)) renders that registry. A `comingSoon` entry stays visible, shows a "Coming soon" label, and disables **Play**. Today the registry contains only Tic-Tac-Toe.

Adding a game is a registry entry plus a screen under `src/app/games`.

## Tech

| | |
| --- | --- |
| Expo | SDK 55 (`expo` ~55.0.4) |
| React Native | 0.83.2 |
| React | 19.2.0 |
| TypeScript | ~5.9, `strict` |
| Navigation | Expo Router ~55, with typed routes enabled |
| Gesture and animation | `react-native-gesture-handler`, `react-native-reanimated` 4, `react-native-worklets` |
| Targets | iOS, Android, and static web export |

How the app is put together:

- Routes live in `src/app`. The home catalog is `src/app/index.tsx`. The `@/*` path alias maps to `src/*` (`@/assets/*` maps to `assets/*`).
- [`src/app/_layout.tsx`](src/app/_layout.tsx) follows the system color scheme through React Navigation's light and dark themes, then mounts an animated splash and the tab navigator.
- The splash ([`src/components/animated-icon.tsx`](src/components/animated-icon.tsx)) is a Reanimated keyframe that scales and fades, then unmounts.
- iOS and Android use Expo Router native tabs ([`src/components/app-tabs.tsx`](src/components/app-tabs.tsx)). Web uses a custom tab bar ([`src/components/app-tabs.web.tsx`](src/components/app-tabs.web.tsx)). Both expose **Home**, **Explore**, and **Tic Tac Toe**.
- **Explore** ([`src/app/explore.tsx`](src/app/explore.tsx)) is the Expo template reference screen: file-based routing notes, images, light and dark mode, and a Reanimated collapsible.
- Color, type, and spacing tokens live in [`src/constants/theme.ts`](src/constants/theme.ts) and feed `ThemedText` / `ThemedView`. Content is capped at 800px wide.
- `app.json` enables the `typedRoutes` and `reactCompiler` experiments, portrait orientation, and a static web export.

## Getting started

You need [Node.js and npm](https://docs.expo.dev/get-started/installation/) at a version Expo SDK 55 supports, plus a way to open the app: Expo Go, an iOS simulator, an Android emulator, or a browser.

```bash
npm install
npm start
```

`npm start` runs `expo start`. From that terminal you can open:

- a [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- an [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

Or start a target directly:

```bash
npm run ios
npm run android
npm run web
```

Screens live under `src/app`. This project uses [file-based routing](https://docs.expo.dev/router/introduction/).

## Scripts

| Script | Command | What it runs |
| --- | --- | --- |
| `start` | `npm start` | `expo start` |
| `ios` | `npm run ios` | `expo start --ios` |
| `android` | `npm run android` | `expo start --android` |
| `web` | `npm run web` | `expo start --web` |
| `lint` | `npm run lint` | `expo lint` |
| `reset-project` | `npm run reset-project` | `node ./scripts/reset-project.js` |

`npm run lint` invokes Expo's linter. This repo does not include an ESLint config yet, so the first run follows Expo's lint setup prompt. See [Using ESLint and Prettier](https://docs.expo.dev/guides/using-eslint/).

`reset-project` is the Expo starter helper. It asks before moving `src` and `scripts` aside and writing a blank `src/app`. Running it removes the arcade. Use **Play again** inside Tic-Tac-Toe to start a new match.

## License

No `LICENSE` file is checked in, and the GitHub repository has no license set. The code is all rights reserved until a license is added.
