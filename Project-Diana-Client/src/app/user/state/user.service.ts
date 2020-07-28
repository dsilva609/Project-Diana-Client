import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { resetStores } from '@datorama/akita';
import { User } from 'src/app/user/state/user.model';
import { UserStore } from 'src/app/user/state/user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private http: HttpClient) {}

  login(loginRequest): Observable<boolean> {
    return this.http.post<string>('User/Login', loginRequest).pipe(
      map((tokenResult) => {
        const user: User = {
          id: 1,
          token: tokenResult,
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
