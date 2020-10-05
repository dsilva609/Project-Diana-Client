import { Routes } from '@angular/router';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AlbumDetailsComponent } from 'src/app/album/details/albumDetails.component';

export const ALBUM_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'album',
    pathMatch: 'full',
  },
  {
    path: 'album',
    component: AlbumListComponent,
  },
  {
    path: 'album/:id',
    component: AlbumDetailsComponent,
  },
];
