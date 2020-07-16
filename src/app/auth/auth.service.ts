import { UserQuery } from './../user/state/user.query';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userQuery: UserQuery) {}

  isAuthenticated(): Observable<boolean> {
    const jwtHelper = new JwtHelperService();

    return this.userQuery.select().pipe(
      map((user) => {
        return !jwtHelper.isTokenExpired(user.token);
      })
    );
  }
}
