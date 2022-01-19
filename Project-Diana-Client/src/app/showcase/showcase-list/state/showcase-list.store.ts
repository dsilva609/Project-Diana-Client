import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Album } from 'src/app/album/album.model';
import { Book } from 'src/app/book/book.model';
import { Game } from 'src/app/game/game.model';
import { Movie } from 'src/app/movie/movie.model';
import { createShowcaseList, ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';

export interface ShowcaseListState extends EntityState<ShowcaseListResponse> {
  showcasedAlbums: Album[];
  showcasedBooks: Book[];
  showcasedGames: Game[];
  showcasedMovies: Movie[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'showcase-list', resettable: true })
export class ShowcaseListStore extends EntityStore<
  ShowcaseListState,
  ShowcaseListResponse
> {
  constructor() {
    super(createShowcaseList);
  }
}
