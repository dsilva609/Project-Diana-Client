import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListState, WishListStore } from 'src/app/wish/wish-list/state/wish-list.store';

@Injectable({ providedIn: 'root' })
export class WishListQuery extends QueryEntity<
  WishListState,
  WishListResponse
> {
  constructor(protected store: WishListStore) {
    super(store);
  }
}
