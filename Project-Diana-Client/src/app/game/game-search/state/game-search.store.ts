import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {
  createGameSearchResult,
  GameSearchResult,
} from 'src/app/game/game-search/state/game-search.model';

export interface GameSearchState extends EntityState<GameSearchResult> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'game-search', resettable: true })
export class GameSearchStore extends EntityStore<
  GameSearchState,
  GameSearchResult
> {
  constructor() {
    super(createGameSearchResult());
  }
}
