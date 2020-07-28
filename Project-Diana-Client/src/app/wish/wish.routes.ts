import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';

export const WISH_ROUTES: Routes = [
  {
    path: '',
    component: WishListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'wish',
    component: WishListComponent,
    canActivate: [AuthGuardService],
  },
];
