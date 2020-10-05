import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/album/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  @Input() album!: Album;

  constructor() {}

  ngOnInit(): void {}
}
