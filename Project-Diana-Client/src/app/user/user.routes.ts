import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/user/login/login.component';

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
];
