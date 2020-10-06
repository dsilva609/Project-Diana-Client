import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
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

  private albumCount = 10;

  constructor(
    private albumListQuery: AlbumListQuery,
    private albumListService: AlbumListService
  ) {}

  ngOnInit(): void {
    this.albumListService.getAlbumList(this.albumCount).subscribe();
    this.albums = this.albumListQuery.selectAll();
  }
}
