import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';
import { AlbumSearchResult } from 'src/app/album/search/state/album-search.model';
import { AlbumSearchQuery } from 'src/app/album/search/state/album-search.query';
import { AlbumSearchService } from 'src/app/album/search/state/album-search.service';
import { AlbumService } from 'src/app/album/state/album.service';

@UntilDestroy()
@Component({
  selector: 'app-album-searched',
  templateUrl: './album-searched.component.html',
  styleUrls: ['./album-searched.component.scss'],
})
export class AlbumSearchedComponent implements OnInit, AfterViewInit {
  searchedAlbum: AlbumSearchResult;
  albumSubmissionForm: FormGroup;

  @ViewChild('albumForm') albumForm: AlbumFormComponent;

  constructor(
    private albumSearchQuery: AlbumSearchQuery,
    private albumSearchService: AlbumSearchService,
    private albumService: AlbumService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.albumSubmissionForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.searchedAlbum = this.albumSearchQuery.getActive() as AlbumSearchResult;
  }

  ngAfterViewInit(): void {
    this.albumSubmissionForm.addControl('albumData', this.albumForm.albumForm);

    this.albumForm.albumForm.patchValue({
      artist: this.searchedAlbum.artist,
      countryOfOrigin: this.searchedAlbum.countryOfOrigin,
      discogsId: this.searchedAlbum.id,
      genre: this.searchedAlbum.genre,
      imageUrl: this.searchedAlbum.coverImage,
      recordLabel: this.searchedAlbum.recordLabel,
      style: this.searchedAlbum.style,
      title: this.searchedAlbum.title,
      yearReleasedOn: Number(this.searchedAlbum.yearReleasedOn),
    });
  }

  onSubmit(albumFormData): void {
    this.albumService
      .submitAlbum(albumFormData.albumData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.albumSearchService.reset();
            this.toastrService.success('New album added');
            this.router.navigateByUrl('/album');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
