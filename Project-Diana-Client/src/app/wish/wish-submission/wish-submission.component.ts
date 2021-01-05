import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { WishService } from 'src/app/wish/state/wish.service';
import { WishFormComponent } from 'src/app/wish/wish-form/wish-form.component';

@Component({
  selector: 'app-wish-submission',
  templateUrl: './wish-submission.component.html',
  styleUrls: ['./wish-submission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishSubmissionComponent implements OnInit, AfterViewInit {
  wishSubmissionForm: FormGroup;

  @ViewChild('wishForm') wishForm: WishFormComponent;

  constructor(
    private router: Router,
    private wishService: WishService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.wishSubmissionForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.wishSubmissionForm.addControl('wishData', this.wishForm.wishForm);
  }

  onSubmit(wishFormData): void {
    this.wishService
      .submitWish(wishFormData.wishData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/wish');

            this.toastrService.success('New wish added');
          } else {
            this.toastrService.error('Error adding wish');
          }
        })
      )
      .subscribe();
  }
}
