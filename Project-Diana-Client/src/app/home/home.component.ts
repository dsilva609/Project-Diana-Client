import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import { Album } from 'src/app/album/album.model';
import { HomeService } from 'src/app/home/state/home.service';

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private albumCount = 10;

  latestAlbums: Album[];

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
  }
}
