import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { UserQuery } from 'src/app/user/state/user.query';
import { UserService } from 'src/app/user/state/user.service';

@UntilDestroy()
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  displayName: string;
  userId: string;
  isCollapsed: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService,
    private userQuery: UserQuery,
    private userService: UserService
  ) {
    this.isCollapsed = true;
  }

  ngOnInit(): void {
    this.userQuery
      .select()
      .pipe(
        tap((user) => {
          this.displayName = user.displayName;
          this.userId = user?.id?.toString() ?? '';
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(untilDestroyed(this));
  }

  logout(): void {
    this.userService.logout();

    this.router.navigate(['']);

    this.toastrService.success('You have successfully logged out');
  }

  onClickedOutside(event: Event): void {
    this.isCollapsed = true;
  }

  goToAlbums(): void {
    this.router
      .navigate(['album'], { queryParams: { pageNum: 1 } })
      .then(() => {
        window.location.reload();
      });
  }

  goToBooks(): void {
    this.router.navigate(['book'], { queryParams: { pageNum: 1 } }).then(() => {
      window.location.reload();
    });
  }
}
