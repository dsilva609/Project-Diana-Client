import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { User } from 'src/app/user/state/user.model';
import { UserQuery } from 'src/app/user/state/user.query';
import { UserStore } from 'src/app/user/state/user.store';
import { environment } from 'src/environments/environment';

import { LoginResponse } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private userQuery: UserQuery,
    private userStore: UserStore,
    private http: HttpClient
  ) {}

  login(loginRequest): Observable<boolean> {
    return this.http.post<LoginResponse>('User/Login', loginRequest).pipe(
      map((loginResponse) => {
        const user: User = {
          id: loginResponse.userId,
          displayName: loginResponse.displayName,
          refreshToken: loginResponse.refreshToken,
          token: loginResponse.token,
        };

        this.userStore.update(user);

        this.startRefreshTimer();

        return true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  logout(): void {
    resetStores();
  }

  refreshToken(refreshToken: string): Observable<void> {
    return this.http
      .post<LoginResponse>('User/Refresh-Token', {
        refreshToken: `${refreshToken}`,
      })
      .pipe(
        map((response) => {
          const user: User = {
            id: response.userId,
            displayName: response.displayName,
            refreshToken: response.refreshToken,
            token: response.token,
          };

          this.userStore.update(user);

          this.startRefreshTimer();
        })
      );
  }

  private startRefreshTimer(): void {
    const timeout = Number(environment.tokenRefreshIntervalMinutes) * 60 * 1000;

    setTimeout(() => {
      this.userQuery
        .select()
        .pipe(
          take(1),
          switchMap((user) => {
            return this.refreshToken(user.refreshToken);
          })
        )
        .subscribe();
    }, timeout);
  }
}
