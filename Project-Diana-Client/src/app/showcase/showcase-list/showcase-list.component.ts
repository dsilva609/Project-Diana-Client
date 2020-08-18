import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ShowcaseListResponse } from 'src/app/showcase/showcase-list/state/showcase-list.model';
import { ShowcaseListQuery } from 'src/app/showcase/showcase-list/state/showcase-list.query';
import { ShowcaseListService } from 'src/app/showcase/showcase-list/state/showcase-list.service';

import { Album } from './../../album/state/album.model';

@Component({
  selector: 'app-showcase-list',
  templateUrl: './showcase-list.component.html',
  styleUrls: ['./showcase-list.component.scss'],
})
export class ShowcaseListComponent implements OnInit {
  showcase = of<ShowcaseListResponse>();

  constructor(
    private showcaseListQuery: ShowcaseListQuery,
    private showcaseListService: ShowcaseListService
  ) {}

  ngOnInit(): void {
    this.showcaseListService.getShowcase().subscribe();
    this.showcase = this.showcaseListQuery.select();
  }

  getImage(album: Album): string {
    return `url('${album.imageUrl}')`;
  }
}
