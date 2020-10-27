import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookFormComponent } from 'src/app/book/book-form/book-form.component';
import { BookSearchResult } from 'src/app/book/book-search/state/book-search.model';
import { BookSearchQuery } from 'src/app/book/book-search/state/book-search.query';
import { BookSearchService } from 'src/app/book/book-search/state/book-search.service';
import { BookSearchStore } from 'src/app/book/book-search/state/book-search.store';
import { BookService } from 'src/app/book/details/state/book.service';

@Component({
  selector: 'app-book-searched',
  templateUrl: './book-searched.component.html',
  styleUrls: ['./book-searched.component.scss'],
})
export class BookSearchedComponent implements OnInit, AfterViewInit {
  searchedBook = of<BookSearchResult>();
  bookSubmissionForm: FormGroup;

  @ViewChild('bookForm') bookForm: BookFormComponent;

  constructor(
    private bookSearchQuery: BookSearchQuery,
    private bookSearchService: BookSearchService,
    private bookService: BookService,
    private bookSearchStore: BookSearchStore,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookSubmissionForm = new FormGroup({});
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.searchedBook = this.bookSearchService.getBookByVolumeId(id);
  }

  ngAfterViewInit(): void {
    this.bookSubmissionForm.addControl('bookData', this.bookForm.bookForm);

    this.searchedBook
      .pipe(
        tap((book) => {
          this.bookForm.bookForm.patchValue({
            author: book.author,
            countryOfOrigin: book.countryOfOrigin,
            genre: book.genre,
            googleBookId: book.googleBookId,
            imageUrl: book.imageUrl,
            isbn10: book.isbn10,
            isbn13: book.isbn13,
            language: book.language,
            pageCount: book.pageCount,
            publisher: book.publisher,
            title: book.title,
            yearReleased: book.yearReleased,
          });
        })
      )
      .subscribe();
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
