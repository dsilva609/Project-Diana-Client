import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user/state/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-diana-client';

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  isLoggedIn(): Observable<boolean> {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.userService.logout();

    this.router.navigate(['']);
  }
}
