import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-diana-client';

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.userService.logout();
  }
}
