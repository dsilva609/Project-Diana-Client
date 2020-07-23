import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Wish } from 'src/app/wish/state/wish.model';

export interface WishState extends EntityState<Wish> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wish', resettable: true })
export class WishStore extends EntityStore<WishState, Wish> {
  constructor() {
    super();
  }
}
