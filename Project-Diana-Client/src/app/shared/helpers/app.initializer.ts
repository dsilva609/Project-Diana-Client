import { switchMap, take } from 'rxjs/operators';
import { UserQuery } from 'src/app/user/state/user.query';
import { UserService } from 'src/app/user/state/user.service';

export function appInitializer(userQuery: UserQuery, userService: UserService) {
  return () => {
    userQuery
      .select()
      .pipe(
        take(1),
        switchMap((user: { refreshToken: string }) => {
          return userService.refreshToken(user.refreshToken);
        })
      )
      .subscribe();
  };
}
