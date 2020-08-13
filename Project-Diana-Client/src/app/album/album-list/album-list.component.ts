import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Album } from 'src/app/album/state/album.model';
import { AlbumQuery } from 'src/app/album/state/album.query';
import { AlbumService } from 'src/app/album/state/album.service';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  albums = of<Album[]>();

  private albumCount = 10;

  constructor(
    private albumQuery: AlbumQuery,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbumList(this.albumCount).subscribe();
    this.albums = this.albumQuery.selectAll();
  }
}
