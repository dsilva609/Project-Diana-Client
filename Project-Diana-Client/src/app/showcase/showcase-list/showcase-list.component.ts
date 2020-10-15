import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Album } from 'src/app/album/album.model';
import { ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';
import { ShowcaseListQuery } from 'src/app/showcase/showcase-list/state/showcase-list.query';
import { ShowcaseListService } from 'src/app/showcase/showcase-list/state/showcase-list.service';
import { UserQuery } from 'src/app/user/state/user.query';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss'],
})
export class ShowcaseListComponent implements OnInit {
  showcase = of<ShowcaseListResponse>();
  userNum: string;

  constructor(
    private showcaseListQuery: ShowcaseListQuery,
    private showcaseListService: ShowcaseListService,
    private route: ActivatedRoute,
    private userQuery: UserQuery
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.showcaseListService.getShowcase(id).subscribe();
    this.showcase = this.showcaseListQuery.select();

    this.userNum = this.userQuery.getValue().userNum.toString();
  }

  clearAlbumShowcase(): void {
    this.showcaseListService.clearAlbumShowcase().subscribe();
  }

  getImage(album: Album): string {
    return `url('${album.imageUrl}')`;
  }
}
