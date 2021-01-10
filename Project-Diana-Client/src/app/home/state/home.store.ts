import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Home } from 'src/app/home/state/home.model';

export interface HomeState extends EntityState<Home> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'home', resettable: true })
export class HomeStore extends EntityStore<HomeState, Home> {
  constructor() {
    super();
  }
}
