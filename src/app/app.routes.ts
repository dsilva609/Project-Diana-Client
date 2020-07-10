import { AuthGuardService } from './auth/auth-guard.service';
import { WishComponent } from './wish/wish.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'wish',
    component: WishComponent,
    canActivate: [AuthGuardService],
  },
];
