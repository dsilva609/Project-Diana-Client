import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { WishStore } from 'src/app/wish/state/wish.store';

import { WishListResponse } from './wish.model';


@Injectable({ providedIn: 'root' })
export class WishQuery extends Query<WishListResponse> {
  constructor(protected store: WishStore) {
    super(store);
  }
}
