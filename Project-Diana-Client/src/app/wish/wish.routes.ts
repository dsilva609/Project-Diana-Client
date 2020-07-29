import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { Routes } from '@angular/router';
import { WishComponent } from './wish.component';
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
  {
    path: ':id',
    component: WishComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'wish/:id',
    component: WishComponent,
    canActivate: [AuthGuardService],
  },
];
