import { User } from './../../app/user/state/user.model';
import { UserQuery } from './../../app/user/state/user.query';
import { Injectable, OnInit } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, switchMap } from 'rxjs/operators';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private user: User;
  constructor(private userQuery: UserQuery) {
    this.userQuery.select().subscribe((data) => (this.user = data));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiUrl = environment.apiBaseUrl;

    req = req.clone({
      url: `${apiUrl}/api/${req.url}`,
    });

    console.log(`token: ${this.user.token}`);

    return this.userQuery.select().pipe(
      tap((user) => (this.user = user)), // side effect to set token property on auth service
      switchMap((data) => {
        // use transformation operator that maps to an Observable<T>
        const newRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        console.log(`got token: ${data.token}`);
        return next.handle(newRequest);
      })
    );
  }
}
