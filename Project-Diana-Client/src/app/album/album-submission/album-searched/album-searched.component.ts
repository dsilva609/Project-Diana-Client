import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';
import { AlbumSearchResult } from 'src/app/album/search/state/album-search.model';
import { AlbumSearchQuery } from 'src/app/album/search/state/album-search.query';
import { AlbumSearchStore } from 'src/app/album/search/state/album-search.store';
import { AlbumService } from 'src/app/album/state/album.service';

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
    private albumService: AlbumService,
    private albumSearchStore: AlbumSearchStore,
    private router: Router
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
      discogsID: this.searchedAlbum.id,
      genre: this.searchedAlbum.genre,
      imageUrl: this.searchedAlbum.coverImage,
      recordLabel: this.searchedAlbum.label,
      style: this.searchedAlbum.style,
      title: this.searchedAlbum.title,
      yearReleased: Number(this.searchedAlbum.yearReleased),
    });
  }

  onSubmit(albumFormData): void {
    this.albumService
      .submitAlbum(albumFormData.albumData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.albumSearchStore.reset();

            this.router.navigateByUrl('/album');
          }
        })
      )
      .subscribe();
  }
}
