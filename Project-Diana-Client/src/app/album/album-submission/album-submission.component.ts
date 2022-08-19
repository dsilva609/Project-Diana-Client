import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';
import { AlbumService } from 'src/app/album/state/album.service';

@UntilDestroy()
@Component({
  selector: 'app-album-submission',
  templateUrl: './album-submission.component.html',
  styleUrls: ['./album-submission.component.scss'],
})
export class AlbumSubmissionComponent implements OnInit, AfterViewInit {
  albumSubmissionForm: UntypedFormGroup;

  @ViewChild('albumForm') albumForm: AlbumFormComponent;

  constructor(
    private router: Router,
    private albumService: AlbumService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.albumSubmissionForm = new UntypedFormGroup({});
  }

  ngAfterViewInit(): void {
    this.albumSubmissionForm.addControl('albumData', this.albumForm.albumForm);
  }

  onSubmit(albumFormData): void {
    this.albumService
      .submitAlbum(albumFormData.albumData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/album');

            this.toastrService.success('New album added');
          } else {
            this.toastrService.error('Error adding album');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
