import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BookListQuery } from 'src/app/book/book-list/state/book-list.query';
import { BookListService } from 'src/app/book/book-list/state/book-list.service';
import { Book } from 'src/app/book/book.model';

@UntilDestroy()
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books = of<Book[]>();
  bookCount = 24;
  page = 0;
  totalBooks = 0;
  searchForm: FormGroup;
  searchQuery = '';

  constructor(
    private bookListQuery: BookListQuery,
    private bookListService: BookListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      searchQuery: '',
    });
  }

  ngOnInit(): void {
    this.page = this.route.snapshot.queryParams.pageNum ?? 0;
    this.searchQuery = this.route.snapshot.queryParams.search ?? '';

    this.getBooks(this.page);

    this.router.navigate(['book'], {
      queryParams: { pageNum: this.page, search: this.searchQuery },
    });
  }

  getNextPage(pageNumber: number): void {
    this.getBooks(pageNumber);

    this.router.navigate(['book'], {
      queryParams: { pageNum: pageNumber, search: this.searchQuery },
    });
  }

  onSearch(query): void {
    if (!query) {
      return;
    }

    this.page = 1;
    this.searchQuery = query.searchQuery;

    this.getBooks(this.page);

    this.router
      .navigate(['book'], {
        queryParams: { pageNum: this.page, search: this.searchQuery },
      })
      .then(() => {
        window.location.reload();
      });
  }

  private getBooks(page: number): void {
    this.bookListService
      .getBookList(this.bookCount, page, this.searchQuery)
      .pipe(
        tap((count) => (this.totalBooks = count)),
        untilDestroyed(this)
      )
      .subscribe();

    this.books = this.bookListQuery.selectAll().pipe(untilDestroyed(this));
  }
}
