import { Component, OnInit } from '@angular/core';
import { WishList } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListQuery } from 'src/app/wish/wish-list/state/wish-list.query';
import { WishListService } from 'src/app/wish/wish-list/state/wish-list.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  tableColumns: string[] = ['title', 'owned', 'date-added'];
  albumWishes: WishList[];
  bookWishes: WishList[];
  gameWishes: WishList[];
  movieWishes: WishList[];

  constructor(
    private wishListQuery: WishListQuery,
    private wishListSerice: WishListService
  ) {}

  ngOnInit(): void {
    this.wishListSerice.getWishList();

    this.wishListQuery.select().subscribe((result) => {
      this.albumWishes = result.albumWishes;
      this.bookWishes = result.bookWishes;
      this.gameWishes = result.gameWishes;
      this.movieWishes = result.movieWishes;
    });
  }
}
