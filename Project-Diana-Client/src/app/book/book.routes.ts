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
    component: BookListComponent,
    data: { title: 'Books' },
  },
  {
    path: 'addFromSearch/:id',
    component: BookSearchedComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Books' },
  },
  {
    path: 'create',
    component: BookSubmissionComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Books' },
  },
  {
    path: 'search',
    component: BookSearchComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Books' },
  },
  {
    path: 'update/:id',
    component: BookUpdateComponent,
    canActivate: [AuthGuardService],
    data: { title: 'Books' },
  },
  {
    path: ':id',
    component: BookDetailsComponent,
    data: { title: 'Books' },
  },
];
