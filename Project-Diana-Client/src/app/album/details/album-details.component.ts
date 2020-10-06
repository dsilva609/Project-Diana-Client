import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Album } from 'src/app/album/album.model';
import { AlbumQuery } from 'src/app/album/details/state/album.query';
import { AlbumService } from 'src/app/album/details/state/album.service';

@Component({
  selector: 'app-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  album = of<Album>();

  constructor(
    private albumQuery: AlbumQuery,
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.albumService.getAlbumById(id).subscribe();

    this.album = this.albumQuery.select();
  }
}
