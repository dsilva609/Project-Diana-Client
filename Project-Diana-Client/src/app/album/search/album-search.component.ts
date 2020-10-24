import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { AlbumSearchQuery } from 'src/app/album/search/state/album-search.query';
import { AlbumSearchService } from 'src/app/album/search/state/album-search.service';

import { AlbumSearchResult } from './state/album-search.model';


@Component({
  selector: 'app-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.scss'],
})
export class AlbumSearchComponent implements OnInit {
  searchForm: FormGroup;
  searchResults = of<AlbumSearchResult[]>();

  constructor(
    private albumSearchQuery: AlbumSearchQuery,
    private albumSearchService: AlbumSearchService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      album: '',
      artist: '',
    });
  }

  ngOnInit(): void {
    this.searchResults = this.albumSearchQuery.selectAll();
  }

  searchAlbums(searchData): void {
    this.albumSearchService.searchForAlbum(searchData).subscribe();
  }

  setAlbumToAdd(id: number): void {
    this.albumSearchService.setAlbumToAdd(id);
  }
}
