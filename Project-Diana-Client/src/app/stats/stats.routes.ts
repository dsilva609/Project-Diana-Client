import { Routes } from '@angular/router';
import { StatsComponent } from 'src/app/stats/stats.component';

export const STATS_ROUTES: Routes = [
  { path: '', component: StatsComponent, data: { title: 'Stats' } },
];
