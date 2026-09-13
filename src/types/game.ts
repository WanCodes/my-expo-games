export type GameId = 'tic-tac-toe' | string;

// As more games are added, extend this union of known routes.
export type GameRoute = '/games/tic-tac-toe';

export interface Game {
  id: GameId;
  name: string;
  description: string;
  route: GameRoute;
  comingSoon?: boolean;
}

