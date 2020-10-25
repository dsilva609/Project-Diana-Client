import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { BookService } from 'src/app/book/details/state/book.service';

@Component({
  selector: 'app-book-submission',
  templateUrl: './book-submission.component.html',
  styleUrls: ['./book-submission.component.scss'],
})
export class BookSubmissionComponent implements OnInit, AfterViewInit {
  bookSubmissionForm: FormGroup;

  @ViewChild('bookForm') bookForm: BookFormComponent;

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    this.bookSubmissionForm = new FormGroup({});
  }

  ngAfterViewInit(): void {
    this.bookSubmissionForm.addControl('bookData', this.bookForm.bookForm);
  }

  onSubmit(bookFormData): void {
    this.bookService
      .submitBook(bookFormData.bookData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.router.navigateByUrl('/book');
          }
        })
      )
      .subscribe();
  }
}
