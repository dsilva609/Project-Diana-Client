import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import {
  Album,
  getMediaTypeDisplayName,
  getVinylSizeDisplayName,
  getVinylSpeedDisplayName,
} from 'src/app/album/album.model';
import { AlbumQuery } from 'src/app/album/state/album.query';
import { AlbumService } from 'src/app/album/state/album.service';
import { getCompletionStatusDisplayName } from 'src/app/shared/item/item.model';
import { UserQuery } from 'src/app/user/state/user.query';

@UntilDestroy()
@Component({
  selector: 'app-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  albumId = '';
  isIncrementPlayCountLoading = false;
  isShowcaseUpdateLoading = false;

  constructor(
    private albumQuery: AlbumQuery,
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');

    this.albumService
      .getAlbumById(this.albumId)
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
    this.isShowcaseUpdateLoading = true;

    this.albumService
      .addToShowcase(this.albumId.toString())
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Album added to showcase');
          } else {
            this.toastrService.error('Unable to add album to showcase');
          }

          this.isShowcaseUpdateLoading = false;
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
    return getVinylSizeDisplayName(value);
  }

  incrementPlayCount(): void {
    this.isIncrementPlayCountLoading = true;

    this.albumService
      .incrementPlayCount(this.albumId.toString(), this.album.timesCompleted)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.album.timesCompleted++;
            this.toastrService.success('Album play count updated');
          }

          this.isIncrementPlayCountLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  isViewable(): boolean {
    return (
      this.userQuery.getValue()?.id &&
      this.albumQuery.getValue().userId === this.userQuery.getValue().id
    );
  }

  removeFromShowcase(): void {
    this.isShowcaseUpdateLoading = true;

    this.albumService
      .removeFromShowcase(this.albumId.toString())
      .pipe(
        tap((successful) => {
          if (successful) {
            this.toastrService.success('Album removed from showcase');
          }

          this.isShowcaseUpdateLoading = false;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
