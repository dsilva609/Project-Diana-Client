import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';
import { AlbumListComponent } from 'src/app/album/album-list/album-list.component';
import { AlbumSearchedComponent } from 'src/app/album/album-submission/album-searched/album-searched.component';
import { AlbumSubmissionComponent } from 'src/app/album/album-submission/album-submission.component';
import { ALBUM_ROUTES } from 'src/app/album/album.routes';
import { AlbumDetailsComponent } from 'src/app/album/details/album-details.component';
import { AlbumSearchComponent } from 'src/app/album/search/album-search.component';
import { AlbumUpdateComponent } from 'src/app/album/update/album-update.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AlbumDetailsComponent,
    AlbumFormComponent,
    AlbumListComponent,
    AlbumSearchComponent,
    AlbumSearchedComponent,
    AlbumSearchedComponent,
    AlbumSubmissionComponent,
    AlbumUpdateComponent,
  ],
  imports: [RouterModule.forChild(ALBUM_ROUTES), SharedModule],
})
export class AlbumModule {}
