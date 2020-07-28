import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';


export interface WishState extends EntityState<WishListResponse> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wish', resettable: true })
export class WishListStore extends EntityStore<WishListResponse> {
  constructor() {
    super();
  }
}
