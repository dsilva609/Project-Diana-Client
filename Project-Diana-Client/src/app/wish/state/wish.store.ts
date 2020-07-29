import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Wish } from 'src/app/wish/state/wish.model';

export interface WishState extends EntityState<Wish> {
  id: number | string;
  dateAdded: Date;
  notes: string;
  owned: boolean;
  title: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wish', resettable: true })
export class WishStore extends EntityStore<WishState, Wish> {
  constructor() {
    super();
  }
}
