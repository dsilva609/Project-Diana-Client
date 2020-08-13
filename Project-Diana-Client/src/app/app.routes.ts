import { Routes } from '@angular/router';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AppComponent } from 'src/app/app.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { UserComponent } from 'src/app/user/user.component';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'album',
    component: AlbumListComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'wish',
    component: WishListComponent,
    canActivate: [AuthGuardService],
  },
];
