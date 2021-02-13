import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatsComponent } from 'src/app/stats/stats.component';
import { STATS_ROUTES } from 'src/app/stats/stats.routes';

@NgModule({
  declarations: [StatsComponent],
  imports: [RouterModule.forChild(STATS_ROUTES), SharedModule],
})
export class StatsModule {}
