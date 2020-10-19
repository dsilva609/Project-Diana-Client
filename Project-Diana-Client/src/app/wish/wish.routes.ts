import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';
import { WishSubmissionComponent } from 'src/app/wish/wish-submission/wish-submission.component';
import { WishComponent } from 'src/app/wish/wish.component';

export const WISH_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    redirectTo: 'wish',
    pathMatch: 'full',
  },
  {
    path: 'wish',
    component: WishListComponent,
    canActivate: [AuthGuardService],
    children: [],
  },
  {
    path: 'wish/create',
    component: WishSubmissionComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'wish/:id',
    component: WishComponent,
    canActivate: [AuthGuardService],
  },
];
