import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GameListState, GameListStore } from 'src/app/game/game-list/state/game-list.store';
import { Game } from 'src/app/game/game.model';

@Injectable({ providedIn: 'root' })
export class GameListQuery extends QueryEntity<GameListState, Game> {
  constructor(protected store: GameListStore) {
    super(store);
  }
}
