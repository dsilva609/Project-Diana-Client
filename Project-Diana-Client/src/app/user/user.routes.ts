import { LoginComponent } from 'src/app/user/login/login.component';
import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user/login',
        component: LoginComponent,
      },
    ],
  },
];
