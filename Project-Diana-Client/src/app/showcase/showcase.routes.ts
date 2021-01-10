import { Routes } from '@angular/router';
import { ShowcaseListComponent } from 'src/app/showcase/showcase-list/showcase-list.component';

export const SHOWCASE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'showcase',
    pathMatch: 'full',
  },
  {
    path: 'showcase/:id',
    component: ShowcaseListComponent,
    data: { title: 'Showcase' },
  },
];
