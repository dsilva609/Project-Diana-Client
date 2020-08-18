import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';
import { ShowcaseListState, ShowcaseListStore } from 'src/app/showcase/showcase-list/state/showcase-list.store';

@Injectable({ providedIn: 'root' })
export class ShowcaseListQuery extends QueryEntity<
  ShowcaseListState,
  ShowcaseListResponse
> {
  constructor(protected store: ShowcaseListStore) {
    super(store);
  }
}
