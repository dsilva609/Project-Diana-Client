import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Stat } from 'src/app/stats/stats.model';
import { UserStatsStore } from 'src/app/stats/user/state/user-stats.store';

@Injectable({ providedIn: 'root' })
export class UserStatsQuery extends QueryEntity<Stat> {
  constructor(protected store: UserStatsStore) {
    super(store);
  }
}
