import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AlbumFormComponent } from 'src/app/album/album-form/album-form.component';
import { AlbumService } from 'src/app/album/state/album.service';

@Component({
  selector: 'app-album-submission',
  templateUrl: './album-submission.component.html',
  styleUrls: ['./album-submission.component.scss'],
})
export class AlbumSubmissionComponent implements OnInit, AfterViewInit {
  albumSubmissionForm: FormGroup;

  @ViewChild('albumForm') albumForm: AlbumFormComponent;

  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumSubmissionForm = new FormGroup({});
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
          }
        })
      )
      .subscribe();
  }
}
