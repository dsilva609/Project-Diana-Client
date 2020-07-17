import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WishStore, WishState } from './wish.store';

@Injectable({ providedIn: 'root' })
export class WishQuery extends QueryEntity<WishState> {

  constructor(protected store: WishStore) {
    super(store);
  }

}
