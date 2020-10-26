import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { BookSearchResult } from 'src/app/book/book-search/state/book-search.model';
import { BookSearchQuery } from 'src/app/book/book-search/state/book-search.query';
import { BookSearchStore } from 'src/app/book/book-search/state/book-search.store';
import { BookService } from 'src/app/book/details/state/book.service';

@Component({
  selector: 'app-book-searched',
  templateUrl: './book-searched.component.html',
  styleUrls: ['./book-searched.component.scss'],
})
export class BookSearchedComponent implements OnInit, AfterViewInit {
  searchedBook: BookSearchResult;
  bookSubmissionForm: FormGroup;

  @ViewChild('bookForm') bookForm: BookFormComponent;

  constructor(
    private bookSearchQuery: BookSearchQuery,
    private bookService: BookService,
    private bookSearchStore: BookSearchStore,
    private router: Router
  ) {
    this.bookSubmissionForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.searchedBook = this.bookSearchQuery.getActive() as BookSearchResult;
  }

  ngAfterViewInit(): void {
    this.bookSubmissionForm.addControl('bookData', this.bookForm.bookForm);

    this.bookForm.bookForm.patchValue({
      author: this.searchedBook.author,
      countryOfOrigin: this.searchedBook.countryOfOrigin,
      genre: this.searchedBook.genre,
      googleBookId: this.searchedBook.googleBookId,
      imageUrl: this.searchedBook.imageUrl,
      isbn10: this.searchedBook.isbn10,
      isbn13: this.searchedBook.isbn13,
      language: this.searchedBook.language,
      pageCount: this.searchedBook.pageCount,
      publisher: this.searchedBook.publisher,
      title: this.searchedBook.title,
      yearReleased: this.searchedBook.yearReleased,
    });
  }

  onSubmit(bookFormData): void {
    this.bookService
      .submitBook(bookFormData.bookData)
      .pipe(
        tap((successful) => {
          if (successful) {
            this.bookSearchStore.reset();

            this.router.navigateByUrl('/book');
          }
        })
      )
      .subscribe();
  }
}
