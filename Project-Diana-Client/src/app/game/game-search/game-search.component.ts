import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { of } from 'rxjs';
import { GameSearchResult } from 'src/app/game/game-search/state/game-search.model';
import { GameSearchQuery } from 'src/app/game/game-search/state/game-search.query';
import { GameSearchService } from 'src/app/game/game-search/state/game-search.service';
import { GAME_CATEGORY_TYPES } from 'src/app/game/game.model';

@UntilDestroy()
@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.scss'],
})
export class GameSearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults = of<GameSearchResult[]>();
  searchTypes = GAME_CATEGORY_TYPES;

  constructor(
    private gameSearchQuery: GameSearchQuery,
    private gameSearchService: GameSearchService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      category: 0,
      title: '',
    });
  }

  ngOnInit(): void {
    const queryTitle = this.route.snapshot.queryParams.title;

    if (queryTitle) {
      this.searchForm.patchValue({
        title: queryTitle,
      });

      this.searchGames(this.searchForm.value);
    }

    this.searchResults = this.gameSearchQuery
      .selectAll()
      .pipe(untilDestroyed(this));
  }

  searchGames(searchData): void {
    this.gameSearchService
      .searchForGame(searchData)
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  setGameToAdd(id: string): void {
    this.gameSearchService.setGameToAdd(id);

    this.router.navigate([`game/addFromSearch/${id}`]);
  }
}
