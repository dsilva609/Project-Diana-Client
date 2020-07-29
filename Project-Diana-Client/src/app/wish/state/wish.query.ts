import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishState, WishStore } from 'src/app/wish/state/wish.store';

@Injectable({ providedIn: 'root' })
export class WishQuery extends QueryEntity<WishState, Wish> {
  constructor(protected store: WishStore) {
    super(store);
  }
}
