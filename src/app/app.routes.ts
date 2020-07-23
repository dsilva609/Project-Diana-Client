import { AppComponent } from 'src/app/app.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { Routes } from '@angular/router';
import { UserComponent } from 'src/app/user/user.component';
import { WishComponent } from 'src/app/wish/wish.component';

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
