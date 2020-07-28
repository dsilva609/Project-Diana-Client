import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListStore } from 'src/app/wish/wish-list/state/wish-list.store';


@Injectable({ providedIn: 'root' })
export class WishListQuery extends Query<WishListResponse> {
  constructor(protected store: WishListStore) {
    super(store);
  }
}
