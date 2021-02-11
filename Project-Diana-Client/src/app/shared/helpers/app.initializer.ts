import { switchMap, take } from 'rxjs/operators';
import { UserQuery } from 'src/app/user/state/user.query';
import { UserService } from 'src/app/user/state/user.service';

// tslint:disable-next-line: typedef
export function appInitializer(userQuery: UserQuery, userService: UserService) {
  return () =>
    new Promise((resolve) => {
      userQuery
        .select()
        .pipe(
          take(1),
          switchMap((user) => {
            return userService.refreshToken(user.refreshToken);
          })
        )
        .subscribe()
        .add(resolve);
    });
}
