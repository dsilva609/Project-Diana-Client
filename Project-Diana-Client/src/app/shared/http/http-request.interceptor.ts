import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserQuery } from 'src/app/user/state/user.query';
import { UserService } from 'src/app/user/state/user.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userQuery: UserQuery,
    private userService: UserService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiUrl = environment.apiBaseUrl;

    req = req.clone({
      url: `${apiUrl}/api/${req.url}`,
    });

    this.userQuery
      .select()
      .pipe(
        tap((user) => {
          if (user.token) {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${user.token}`,
              },
            });
          }
        })
      )
      .subscribe();

    return next.handle(req);
  }
}
