import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { LoginComponent } from 'src/app/user/login/login.component';
import { SettingsComponent } from 'src/app/user/settings/settings.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
    data: { title: 'User Settings' },
  },
];
