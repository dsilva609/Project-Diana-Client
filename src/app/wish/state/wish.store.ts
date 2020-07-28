import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { WishListResponse } from './wish.model';


export interface WishState extends EntityState<WishListResponse> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wish', resettable: true })
export class WishStore extends EntityStore<WishListResponse> {
  constructor() {
    super();
  }
}
