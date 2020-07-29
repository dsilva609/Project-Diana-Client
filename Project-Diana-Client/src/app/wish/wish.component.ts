import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent implements OnInit {
  wish: Wish;

  constructor(
    private route: ActivatedRoute,
    private wishQuery: WishQuery,
    private wishService: WishService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const wishID = this.route.snapshot.paramMap.get('id');

      this.wishService.getWishByID(wishID);
    });

    this.wishQuery.select().subscribe((wish) => {
      this.wish = wish;
    });
  }
}
