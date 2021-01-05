import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserQuery } from 'src/app/user/state/user.query';

@UntilDestroy()
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
      }),
      untilDestroyed(this)
    );
  }
}
