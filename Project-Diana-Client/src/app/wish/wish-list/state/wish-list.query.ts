import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListStore, WishState } from 'src/app/wish/wish-list/state/wish-list.store';

@Injectable({ providedIn: 'root' })
export class WishListQuery extends QueryEntity<WishState, WishListResponse> {
  constructor(protected store: WishListStore) {
    super(store);
  }
}
