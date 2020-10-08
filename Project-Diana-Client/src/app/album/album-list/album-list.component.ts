import { Component, OnInit } from '@angular/core';
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
  albumCount = 1;
  page = 0;
  totalAlbums = 0;

  constructor(
    private albumListQuery: AlbumListQuery,
    private albumListService: AlbumListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.page = this.route.snapshot.queryParams.pageNum ?? 0;

    this.getAlbums(this.page);
  }

  getNextPage(pageNumber: number): void {
    this.getAlbums(pageNumber);
  }

  getAlbums(page: number): void {
    this.albumListService
      .getAlbumList(this.albumCount, page)
      .pipe(tap((count) => (this.totalAlbums = count)))
      .subscribe();

    this.albums = this.albumListQuery.selectAll();

    this.router.navigate(['album'], { queryParams: { pageNum: page } });
  }
}
