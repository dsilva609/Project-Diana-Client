import { environment } from 'src/environments/environment';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/user/state/user.model';
import { UserQuery } from 'src/app/user/state/user.query';

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

    return this.userQuery.select().pipe(
      tap((user) => (this.user = user)), // side effect to set token property on auth service
      switchMap((data) => {
        // use transformation operator that maps to an Observable<T>
        const newRequest = req.clone({
          setHeaders: {
            Authorization: `Bearer ${data.token}`,
          },
        });

        return next.handle(newRequest);
      })
    );
  }
}
