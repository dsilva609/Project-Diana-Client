import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Stat } from 'src/app/stats/stats.model';
import { UserStatsStore } from 'src/app/stats/user/state/user-stats.store';

@Injectable({ providedIn: 'root' })
export class UserStatsService {
  constructor(
    protected userStatsService: UserStatsStore,
    private http: HttpClient
  ) {}

  getUserStats(): Observable<Stat> {
    return this.http.get<Stat>('Stats/GetUserStats').pipe(
      tap((stats) => {
        this.userStatsService.update(stats);

        return stats;
      })
    );
  }
}
