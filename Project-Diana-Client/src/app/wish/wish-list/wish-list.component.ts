import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { WishService } from 'src/app/wish/state/wish.service';
import { WishList } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListQuery } from 'src/app/wish/wish-list/state/wish-list.query';
import { WishListService } from 'src/app/wish/wish-list/state/wish-list.service';

@UntilDestroy()
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
    private router: Router,
    private wishListQuery: WishListQuery,
    private wishListSerice: WishListService,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.wishListSerice.getWishList().pipe(untilDestroyed(this)).subscribe();

    this.wishListQuery
      .select()
      .pipe(
        tap((result) => {
          this.albumWishes = result.albumWishes;
          this.bookWishes = result.bookWishes;
          this.gameWishes = result.gameWishes;
          this.movieWishes = result.movieWishes;
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  searchForWish(id: number, url: string, wishTitle: string): void {
    this.wishService.setActiveWish(id);

    this.router.navigate([url], { queryParams: { title: wishTitle } });
  }

  viewWish(wishID: number): void {
    this.router.navigate([`wish/${wishID}`]);
  }
}
