import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserStore } from './user.store';
import { User, createUser } from './user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private http: HttpClient) {}

  login(loginRequest): Observable<boolean> {
    return this.http.post<string>('User/Login', loginRequest).pipe(
      map((tokenResult) => {
        const user: User = createUser();
        user.id = '1';
        user.token = tokenResult;
        console.log(`login result ${tokenResult}, ${JSON.stringify(user)}`);
        this.userStore.update(user);

        return true;
      })
    );
  }

  logout(): void {
    this.userStore.reset();
  }
}
