import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GameListQuery } from 'src/app/game/game-list/state/game-list.query';
import { GameListService } from 'src/app/game/game-list/state/game-list.service';
import { Game } from 'src/app/game/game.model';

@UntilDestroy()
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games = of<Game[]>();
  gameCount = 24;
  page = 1;
  totalGames = 0;
  searchForm: UntypedFormGroup;
  searchQuery = '';

  constructor(
    private gameListQuery: GameListQuery,
    private gameListService: GameListService,
    private formBuilder: UntypedFormBuilder,
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

    this.getGames(this.page);

    this.router.navigate(['game'], {
      queryParams: { pageNum: this.page, search: this.searchQuery },
    });
  }

  getNextPage(pageNumber: number): void {
    this.getGames(pageNumber);

    this.router.navigate(['game'], {
      queryParams: { pageNum: this.page, search: this.searchQuery },
    });
  }

  onSearch(query): void {
    if (!query) {
      return;
    }

    this.page = 1;
    this.searchQuery = query.searchQuery;

    this.getGames(this.page);

    this.router
      .navigate(['game'], {
        queryParams: { pageNum: this.page, search: this.searchQuery },
      })
      .then(() => {
        window.location.reload();
      });
  }

  private getGames(page: number): void {
    this.gameListService
      .getGameList(this.gameCount, page, this.searchQuery)
      .pipe(
        tap((count) => (this.totalGames = count)),
        untilDestroyed(this)
      )
      .subscribe();

    this.games = this.gameListQuery.selectAll().pipe(untilDestroyed(this));
  }
}
