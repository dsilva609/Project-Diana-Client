import { Routes } from '@angular/router';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AlbumSearchedComponent } from 'src/app/album/album-submission/album-searched/album-searched.component';
import { AlbumSubmissionComponent } from 'src/app/album/album-submission/album-submission.component';
import { AlbumDetailsComponent } from 'src/app/album/details/album-details.component';
import { AlbumSearchComponent } from 'src/app/album/search/album-search.component';
import { AlbumUpdateComponent } from 'src/app/album/update/album-update.component';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';

export const ALBUM_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'album',
    pathMatch: 'full',
  },
  {
    path: 'album',
    component: AlbumListComponent,
    data: { title: 'Albums' },
  },
  {
    path: 'album/addFromSearch',
    component: AlbumSearchedComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Albums' },
  },
  {
    path: 'album/create',
    component: AlbumSubmissionComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Albums' },
  },
  {
    path: 'album/search',
    component: AlbumSearchComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Albums' },
  },
  {
    path: 'album/update/:id',
    component: AlbumUpdateComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Albums' },
  },
  {
    path: 'album/:id',
    component: AlbumDetailsComponent,
    data: { title: 'Albums' },
  },
];
