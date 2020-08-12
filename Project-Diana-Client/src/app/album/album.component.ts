import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Album } from 'src/app/album/state/album.model';
import { AlbumQuery } from 'src/app/album/state/album.query';
import { AlbumService } from 'src/app/album/state/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  albums = of<Album[]>();

  constructor(
    private albumQuery: AlbumQuery,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbumList().subscribe();
    this.albums = this.albumQuery.selectAll();
  }
}
