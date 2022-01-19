import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { MovieFormComponent } from 'src/app/movie/movie-form/movie-form.component';
import { MovieService } from 'src/app/movie/state/movie.service';

@UntilDestroy()
@Component({
  selector: 'app-movie-submission',
  templateUrl: './movie-submission.component.html',
  styleUrls: ['./movie-submission.component.scss'],
})
export class MovieSubmissionComponent implements OnInit, AfterViewInit {
  movieSubmissionForm: FormGroup;
  @ViewChild('movieForm') movieForm: MovieFormComponent;

  constructor(
    private router: Router,
    private movieService: MovieService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.movieSubmissionForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.movieSubmissionForm.addControl('movieData', this.movieForm.movieForm);
  }

  onSubmit(movieFormData): void {
    this.movieService
      .submitMovie(movieFormData.movieData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/movie');
            this.toastrService.success('New movie added');
          } else {
            this.toastrService.error('Error adding movie');
          }
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
