import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import { Album } from 'src/app/album/album.model';
import { Book } from 'src/app/book/book.model';
import { HomeService } from 'src/app/home/state/home.service';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private albumCount = 10;
  private bookCount = 10;

  latestAlbums: Album[];
  latestBooks: Book[];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService
      .getLatestAlbums(this.albumCount)
      .pipe(
        map((response) => {
          this.latestAlbums = response.albums;
        }),
        untilDestroyed(this)
      )
      .subscribe();

    this.homeService
      .getLatestBooks(this.bookCount)
      .pipe(
        map((response) => {
          this.latestBooks = response.books;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }
}
