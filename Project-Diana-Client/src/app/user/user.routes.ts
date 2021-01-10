import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/user/login/login.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user/login',
        component: LoginComponent,
        data: { title: 'Login' },
      },
    ],
  },
];
