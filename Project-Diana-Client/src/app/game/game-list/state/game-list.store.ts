import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createGame, Game } from 'src/app/game/game.model';

export interface GameListState extends EntityState<Game> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-list', resettable: true })
export class GameListStore extends EntityStore<GameListState, Game> {
  constructor() {
    super(createGame());
  }
}
