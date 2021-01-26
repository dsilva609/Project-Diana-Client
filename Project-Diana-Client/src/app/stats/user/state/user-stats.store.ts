import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { createStat, Stat } from 'src/app/stats/stats.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-stats', resettable: true })
export class UserStatsStore extends EntityStore<Stat> {
  constructor() {
    super(createStat());
  }
}
