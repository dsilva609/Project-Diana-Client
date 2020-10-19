import { Routes } from '@angular/router';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AlbumSubmissionComponent } from 'src/app/album/album-submission/album-submission.component';
import { AlbumDetailsComponent } from 'src/app/album/details/album-details.component';
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
  },
  {
    path: 'album/create',
    component: AlbumSubmissionComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'album/:id',
    component: AlbumDetailsComponent,
  },
];
