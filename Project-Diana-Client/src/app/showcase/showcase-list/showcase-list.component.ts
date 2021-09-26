import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { Album } from 'src/app/album/album.model';
import { ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';
import { ShowcaseListQuery } from 'src/app/showcase/showcase-list/state/showcase-list.query';
import { ShowcaseListService } from 'src/app/showcase/showcase-list/state/showcase-list.service';
import { UserQuery } from 'src/app/user/state/user.query';

@UntilDestroy()
@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss'],
})
export class ShowcaseListComponent implements OnInit {
  showcase = of<ShowcaseListResponse>();

  constructor(
    private showcaseListQuery: ShowcaseListQuery,
    private showcaseListService: ShowcaseListService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.showcaseListService
      .getShowcase(id)
      .pipe(untilDestroyed(this))
      .subscribe();
    this.showcase = this.showcaseListQuery.select().pipe(untilDestroyed(this));
  }

  clearAlbumShowcase(): void {
    this.showcaseListService
      .clearAlbumShowcase()
      .pipe(untilDestroyed(this))
      .subscribe();

    this.toastrService.success('Album showcase has been cleared');
  }

  getImage(album: Album): string {
    return `url('${album.imageUrl}')`;
  }
}
