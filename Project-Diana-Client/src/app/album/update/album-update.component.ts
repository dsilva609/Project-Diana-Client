import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';
import { Album } from 'src/app/album/album.model';
import { AlbumQuery } from 'src/app/album/state/album.query';
import { AlbumService } from 'src/app/album/state/album.service';

@UntilDestroy()
@Component({
  selector: 'app-update',
  templateUrl: './album-update.component.html',
  styleUrls: ['./album-update.component.scss'],
})
export class AlbumUpdateComponent implements OnInit, AfterViewInit {
  album = of<Album>();
  albumId: string;
  albumUpdateForm: FormGroup;
  datePipe: DatePipe;

  @ViewChild('albumForm') albumForm: AlbumFormComponent;

  constructor(
    private albumQuery: AlbumQuery,
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');

    this.albumService
      .getAlbumById(this.albumId)
      .pipe(untilDestroyed(this))
      .subscribe();

    this.album = this.albumQuery.select().pipe(untilDestroyed(this));

    this.albumUpdateForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.albumUpdateForm.addControl('albumData', this.albumForm.albumForm);

    this.album
      .pipe(
        tap((album) => {
          const date = this.datePipe.transform(
            album.datePurchased,
            'yyyy-MM-dd'
          );

          this.albumForm.albumForm.patchValue({
            artist: album.artist,
            category: album.category,
            completionStatus: album.completionStatus,
            countryOfOrigin: album.countryOfOrigin,
            countryPurchased: album.countryPurchased,
            datePurchased: date,
            discogsId: album.discogsId,
            genre: album.genre,
            imageUrl: album.imageUrl,
            isNewPurchase: album.isNew,
            isPhysical: album.isPhysical,
            locationPurchased: album.locationPurchased,
            mediaType: album.mediaType,
            notes: album.notes,
            playCount: album.timesCompleted,
            recordLabel: album.recordLabel,
            size: album.size,
            speed: album.speed,
            style: album.style,
            title: album.title,
            yearReleased: album.yearReleased,
          });
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSubmit(albumFormData): void {
    albumFormData.albumData.albumId = Number(this.albumId);

    this.albumService
      .updateAlbum(albumFormData.albumData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/album');

            this.toastrService.success('Album successfully updated');
          } else {
            this.toastrService.error('Error updating album');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
