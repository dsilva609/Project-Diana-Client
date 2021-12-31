import { Game } from 'src/app/game/game.model';

export interface GameListResponse {
  games: Game[];
  totalCount: number;
}
