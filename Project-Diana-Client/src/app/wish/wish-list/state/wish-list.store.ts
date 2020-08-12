import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { createWishList, WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';

export interface WishListState extends EntityState<WishListResponse> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wish-list', resettable: true })
export class WishListStore extends EntityStore<
  WishListState,
  WishListResponse
> {
  constructor() {
    super(createWishList());
  }
}
