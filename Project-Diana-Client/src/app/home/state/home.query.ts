import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HomeState, HomeStore } from 'src/app/home/state/home.store';

@Injectable({ providedIn: 'root' })
export class HomeQuery extends QueryEntity<HomeState> {
  constructor(protected store: HomeStore) {
    super(store);
  }
}
