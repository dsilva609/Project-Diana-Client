import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { BookSearchResult } from 'src/app/book/book-search/state/book-search.model';
import { BookSearchQuery } from 'src/app/book/book-search/state/book-search.query';
import { BookSearchService } from 'src/app/book/book-search/state/book-search.service';

@UntilDestroy()
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  searchForm: UntypedFormGroup;
  searchResults = of<BookSearchResult[]>();

  constructor(
    private bookSearchQuery: BookSearchQuery,
    private bookSearchService: BookSearchService,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      author: '',
      title: '',
    });
  }

  ngOnInit(): void {
    const queryTitle = this.route.snapshot.queryParams.title;

    if (queryTitle) {
      this.searchForm.patchValue({
        title: queryTitle,
      });

      this.searchBooks(this.searchForm.value);
    }

    this.searchResults = this.bookSearchQuery
      .selectAll()
      .pipe(untilDestroyed(this));
  }

  searchBooks(searchData): void {
    this.bookSearchService
      .searchForBook(searchData)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  setBookToAdd(id: string): void {
    this.bookSearchService.setBookToAdd(id);

    this.router.navigate([`book/addFromSearch/${id}`]);
  }
}
