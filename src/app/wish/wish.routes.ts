import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { Routes } from '@angular/router';
import { WishComponent } from 'src/app/wish/wish.component';

export const WISH_ROUTES: Routes = [
  {
    path: '',
    component: WishComponent,
    canActivate: [AuthGuardService],
  },
];
