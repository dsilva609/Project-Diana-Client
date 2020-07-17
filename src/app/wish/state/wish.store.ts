import { Injectable } from '@angular/core';
import { Wish } from './wish.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface WishState extends EntityState<Wish> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wish', resettable: true })
export class WishStore extends EntityStore<WishState, Wish> {
  constructor() {
    super();
  }
}
