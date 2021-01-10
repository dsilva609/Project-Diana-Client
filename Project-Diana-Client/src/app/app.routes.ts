import { Routes } from '@angular/router';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { BookListComponent } from 'src/app/book/book-list/book-list.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ShowcaseListComponent } from 'src/app/showcase/showcase-list/showcase-list.component';
import { UserComponent } from 'src/app/user/user.component';
import { WishListComponent } from 'src/app/wish/wish-list/wish-List.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'album',
    component: AlbumListComponent,
    data: { title: 'Albums' },
  },
  {
    path: 'book',
    component: BookListComponent,
    data: { title: 'Books' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'showcase',
    component: ShowcaseListComponent,
    data: { title: 'Showcase' },
  },
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User' },
  },
  {
    path: 'wish',
    component: WishListComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Wish List' },
  },
];
