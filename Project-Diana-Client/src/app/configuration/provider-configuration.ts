import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { appInitializer } from 'src/app/shared/helpers/app.initializer';
import { HttpRequestInterceptor } from 'src/app/shared/http/http-request.interceptor';
import { UserQuery } from 'src/app/user/state/user.query';
import { UserService } from 'src/app/user/state/user.service';

export const APP_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInitializer,
    multi: true,
    deps: [UserQuery, UserService],
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
  },
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  DatePipe,
];
