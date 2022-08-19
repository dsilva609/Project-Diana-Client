import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { AlbumSearchResult } from 'src/app/album/search/state/album-search.model';
import { AlbumSearchQuery } from 'src/app/album/search/state/album-search.query';
import { AlbumSearchService } from 'src/app/album/search/state/album-search.service';

@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss'],
})
export class AlbumSearchComponent implements OnInit {
  searchForm: UntypedFormGroup;
  searchResults = of<AlbumSearchResult[]>();

  constructor(
    private albumSearchQuery: AlbumSearchQuery,
    private albumSearchService: AlbumSearchService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      album: '',
      artist: '',
    });
  }

  ngOnInit(): void {
    const queryTitle = this.route.snapshot.queryParams.title;

    if (queryTitle) {
      this.searchForm.patchValue({
        album: queryTitle,
      });

      this.searchAlbums(this.searchForm.value);
    }

    this.searchResults = this.albumSearchQuery
      .selectAll()
      .pipe(untilDestroyed(this));
  }

  searchAlbums(searchData): void {
    this.albumSearchService
      .searchForAlbum(searchData)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  setAlbumToAdd(id: number): void {
    this.albumSearchService.setAlbumToAdd(id);

    this.router.navigateByUrl('album/addFromSearch');
  }
}
