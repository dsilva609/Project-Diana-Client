import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'album',
    loadChildren: () =>
      import('./album/album.module').then((m) => m.AlbumModule),
    data: {
      title: 'Albums',
    },
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
    data: {
      title: 'Books',
    },
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'Home',
    },
  },
  {
    path: 'showcase',
    loadChildren: () =>
      import('./showcase/showcase.module').then((m) => m.ShowcaseModule),
    data: {
      title: 'Showcase',
    },
  },
  {
    path: 'stats',
    loadChildren: () =>
      import('./stats/stats.module').then((m) => m.StatsModule),
    data: {
      title: 'Stats',
    },
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    data: {
      title: 'User',
    },
  },
  {
    path: 'wish',
    loadChildren: () => import('./wish/wish.module').then((m) => m.WishModule),
    data: {
      title: 'Wish List',
    },
  },
];
