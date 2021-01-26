import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GlobalStatsStore } from 'src/app/stats/global/state/global-stats.store';
import { Stat } from 'src/app/stats/stats.model';

@Injectable({ providedIn: 'root' })
export class GlobalStatsQuery extends QueryEntity<Stat> {
  constructor(protected store: GlobalStatsStore) {
    super(store);
  }
}
