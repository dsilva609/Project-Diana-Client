import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GlobalStatsStore } from 'src/app/stats/global/state/global-stats.store';
import { Stat } from 'src/app/stats/stats.model';

@Injectable({ providedIn: 'root' })
export class GlobalStatsService {
  constructor(
    protected globalStatsStore: GlobalStatsStore,
    private http: HttpClient
  ) {}

  getGlobalStats(): Observable<Stat> {
    return this.http.get<Stat>('Stats/GetGlobalStats').pipe(
      tap((stats) => {
        this.globalStatsStore.update(stats);

        return stats;
      })
    );
  }
}
