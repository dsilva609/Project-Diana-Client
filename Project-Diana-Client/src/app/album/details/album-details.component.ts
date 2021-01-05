import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import {
  Album,
  getMediaTypeDisplayName,
  getVinylSpeedDisplayName,
} from 'src/app/album/album.model';
import { AlbumQuery } from 'src/app/album/state/album.query';
import { AlbumService } from 'src/app/album/state/album.service';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';

@UntilDestroy()
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
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');

    this.albumService
      .getAlbumById(albumId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.albumQuery
      .select()
      .pipe(
        tap((a) => (this.album = a)),
        untilDestroyed(this)
      )
      .subscribe();
  }

  addToShowcase(): void {
    this.albumService
      .addToShowcase(this.album.id.toString())
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Album added to showcase');
          } else {
            this.toastrService.error('Unable to add album to showcase');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  getCompletionStatusDisplayName(value: number): string {
    return getCompletionStatusDisplayName(value);
  }

  getMediaTypeDisplayName(value: number): string {
    return getMediaTypeDisplayName(value);
  }

  getSpeedDisplayName(value: number): string {
    return getVinylSpeedDisplayName(value);
  }

  getSizeDisplayName(value: number): string {
    return getVinylSpeedDisplayName(value);
  }

  incrementPlayCount(): void {
    this.albumService
      .incrementPlayCount(this.album.id.toString(), this.album.timesCompleted)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.album.timesCompleted++;

            this.toastrService.success('Album play count updated');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  removeFromShowcase(): void {
    this.albumService
      .removeFromShowcase(this.album.id.toString())
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Album removed from showcase');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
