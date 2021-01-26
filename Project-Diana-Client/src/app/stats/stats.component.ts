import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { GlobalStatsQuery } from 'src/app/stats/global/state/global-stats.query';
import { GlobalStatsService } from 'src/app/stats/global/state/global-stats.service';
import { Stat } from 'src/app/stats/stats.model';
import { UserStatsQuery } from 'src/app/stats/user/state/user-stats.query';
import { UserStatsService } from 'src/app/stats/user/state/user-stats.service';



@UntilDestroy()
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  globalStats = of<Stat>();
  userStats = of<Stat>();

  constructor(
    private globalStatsQuery: GlobalStatsQuery,
    private globalStatsService: GlobalStatsService,
    private userStatsQuery: UserStatsQuery,
    private userStatsService: UserStatsService
  ) {}

  ngOnInit(): void {
    this.globalStatsService
      .getGlobalStats()
      .pipe(untilDestroyed(this))
      .subscribe();
    this.userStatsService.getUserStats().pipe(untilDestroyed(this)).subscribe();

    this.globalStats = this.globalStatsQuery
      .select()
      .pipe(untilDestroyed(this));

    this.userStats = this.userStatsQuery.select().pipe(untilDestroyed(this));
  }
}
