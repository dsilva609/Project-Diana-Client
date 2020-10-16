import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Album } from 'src/app/album/album.model';
import { AlbumQuery } from 'src/app/album/details/state/album.query';
import { AlbumService } from 'src/app/album/details/state/album.service';

@Component({
  selector: 'app-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;

  constructor(
    private albumQuery: AlbumQuery,
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');

    this.albumService.getAlbumById(albumId).subscribe();

    this.albumQuery
      .select()
      .pipe(tap((a) => (this.album = a)))
      .subscribe();
  }

  addToShowcase(): void {
    this.albumService.addToShowcase(this.album.id.toString()).subscribe();
  }

  incrementPlayCount(): void {
    this.albumService
      .incrementPlayCount(this.album.id.toString(), this.album.timesCompleted)
      .pipe(tap((_) => this.album.timesCompleted++))
      .subscribe();
  }

  removeFromShowcase(): void {
    this.albumService.removeFromShowcase(this.album.id.toString()).subscribe();
  }
}
