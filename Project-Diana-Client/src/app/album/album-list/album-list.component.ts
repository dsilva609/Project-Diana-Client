import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlbumListQuery } from 'src/app/album/album-list/state/album-list.query';
import { AlbumListService } from 'src/app/album/album-list/state/album-list.service';
import { Album } from 'src/app/album/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  albums = of<Album[]>();
  albumCount = 24;
  page = 1;
  totalAlbums = 0;
  searchForm: FormGroup;
  searchQuery = '';

  constructor(
    private albumListQuery: AlbumListQuery,
    private albumListService: AlbumListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      searchQuery: '',
    });
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.queryParams.pageNum ?? 0;
    this.searchQuery = this.route.snapshot.queryParams.search ?? '';

    this.getAlbums(this.page);

    this.router.navigate(['album'], {
      queryParams: { pageNum: this.page, search: this.searchQuery },
    });
  }

  getNextPage(pageNumber: number): void {
    this.getAlbums(pageNumber);

    this.router.navigate(['album'], {
      queryParams: { pageNum: pageNumber, search: this.searchQuery },
    });
  }

  onSearch(query): void {
    if (!query) {
      return;
    }

    this.page = 1;
    this.searchQuery = query.searchQuery;

    this.getAlbums(this.page);

    this.router
      .navigate(['album'], {
        queryParams: { pageNum: this.page, search: this.searchQuery },
      })
      .then(() => {
        window.location.reload();
      });
  }
  private getAlbums(page: number): void {
    this.albumListService
      .getAlbumList(this.albumCount, page, this.searchQuery)
      .pipe(tap((count) => (this.totalAlbums = count)))
      .subscribe();

    this.albums = this.albumListQuery.selectAll();
  }
}
