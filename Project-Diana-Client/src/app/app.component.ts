import { AuthService } from 'src/app/auth/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/state/user.service';

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
