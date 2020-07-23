import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/state/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isCollapsed: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.isCollapsed = false;
  }

  ngOnInit(): void {}

  isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.userService.logout();

    this.router.navigate(['']);
  }
}
