import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';
import { BookListComponent } from 'src/app/book/book-list/book-list.component';
import { BookSearchComponent } from 'src/app/book/book-search/book-search.component';
import { BookSearchedComponent } from 'src/app/book/book-submission/book-searched/book-searched.component';
import { BookSubmissionComponent } from 'src/app/book/book-submission/book-submission.component';
import { BookDetailsComponent } from 'src/app/book/details/book-details.component';
import { BookUpdateComponent } from 'src/app/book/update/book-update.component';

export const BOOK_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'book',
    pathMatch: 'full',
  },
  {
    path: 'book',
    component: BookListComponent,
  },
  {
    path: 'book/addFromSearch',
    component: BookSearchedComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'book/create',
    component: BookSubmissionComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'book/search',
    component: BookSearchComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'book/update/:id',
    component: BookUpdateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent,
  },
];
