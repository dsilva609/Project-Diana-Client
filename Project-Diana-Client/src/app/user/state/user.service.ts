import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resetStores } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/user/state/user.model';
import { UserStore } from 'src/app/user/state/user.store';

import { LoginResponse } from './user.model';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private http: HttpClient) {}

  login(loginRequest): Observable<boolean> {
    return this.http.post<LoginResponse>('User/Login', loginRequest).pipe(
      map((loginResponse) => {
        const user: User = {
          id: loginResponse.userId,
          displayName: loginResponse.displayName,
          token: loginResponse.token,
          userNum: loginResponse.userNum,
        };

        this.userStore.update(user);

        return true;
      })
    );
  }

  logout(): void {
    resetStores();
  }
}
