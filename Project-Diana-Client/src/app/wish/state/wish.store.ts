import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createWish, Wish } from 'src/app/wish/state/wish.model';

export interface WishState extends EntityState<Wish> {
  id: string;
  apiId: string;
  category: string;
  dateAdded: Date;
  dateModified: Date;
  imageUrl: string;
  isOwned: boolean;
  itemType: number;
  notes: string;
  title: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wish', resettable: true })
export class WishStore extends EntityStore<WishState, Wish> {
  constructor() {
    super(createWish());
  }
}
