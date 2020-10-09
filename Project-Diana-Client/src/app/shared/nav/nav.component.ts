import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { UserQuery } from 'src/app/user/state/user.query';
import { UserService } from 'src/app/user/state/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  displayName: string;
  isCollapsed: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userQuery: UserQuery,
    private userService: UserService
  ) {
    this.isCollapsed = true;
  }

  ngOnInit(): void {
    this.userQuery
      .select()
      .pipe(tap((user) => (this.displayName = user.displayName)))
      .subscribe();
  }

  isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.userService.logout();

    this.router.navigate(['']);
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
