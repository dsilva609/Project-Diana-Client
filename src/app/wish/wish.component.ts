import { Component, OnInit } from '@angular/core';
import { WishList } from 'src/app/wish/state/wish.model';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent implements OnInit {
  tableColumns: string[] = ['title', 'owned', 'date-added'];
  albumWishes: WishList[];
  bookWishes: WishList[];
  gameWishes: WishList[];
  movieWishes: WishList[];

  constructor(private wishQuery: WishQuery, private wishSerice: WishService) {}

  ngOnInit(): void {
    this.wishSerice.getWishList();

    this.wishQuery.select().subscribe((result) => {
      this.albumWishes = result.albumWishes;
      this.bookWishes = result.bookWishes;
      this.gameWishes = result.gameWishes;
      this.movieWishes = result.movieWishes;
    });
  }
}
