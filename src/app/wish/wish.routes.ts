import { AuthGuardService } from './../auth/auth-guard.service';
import { WishComponent } from './wish.component';
import { Routes } from '@angular/router';

export const WISH_ROUTES: Routes = [
  {
    path: '',
    component: WishComponent,
    canActivate: [AuthGuardService],
  },
];
