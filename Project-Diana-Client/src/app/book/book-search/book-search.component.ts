import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { BookSearchResult } from 'src/app/book/book-search/state/book-search.model';
import { BookSearchQuery } from 'src/app/book/book-search/state/book-search.query';
import { BookSearchService } from 'src/app/book/book-search/state/book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults = of<BookSearchResult[]>();

  constructor(
    private bookSearchQuery: BookSearchQuery,
    private bookSearchService: BookSearchService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      author: '',
      title: '',
    });
  }

  ngOnInit(): void {
    this.searchResults = this.bookSearchQuery.selectAll();
  }

  searchBooks(searchData): void {
    this.bookSearchService.searchForBook(searchData).subscribe();
  }

  setBookToAdd(id: string): void {
    this.bookSearchService.setBookToAdd(id);

    this.router.navigateByUrl('book/addFromSearch');
  }
}
