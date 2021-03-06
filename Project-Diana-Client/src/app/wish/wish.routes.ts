import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';
import { WishSubmissionComponent } from 'src/app/wish/wish-submission/wish-submission.component';
import { WishComponent } from 'src/app/wish/wish.component';

export const WISH_ROUTES: Routes = [
  {
    path: '',
    component: WishListComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Wish List' },
    children: [],
  },
  {
    path: 'create',
    component: WishSubmissionComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Wish List' },
  },
  {
    path: ':id',
    component: WishComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Wish List' },
  },
];
