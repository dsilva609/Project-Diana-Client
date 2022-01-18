import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { createGame, Game } from 'src/app/game/game.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-details', resettable: true })
export class GameDetailsStore extends EntityStore<Game> {
  constructor() {
    super(createGame());
  }
}
