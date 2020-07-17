import { WishQuery } from './state/wish.query';
import { Observable } from 'rxjs';
import { WishService } from './state/wish.service';
import { Component, OnInit } from '@angular/core';
import { Wish } from './state/wish.model';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent implements OnInit {
  wishList: Observable<Wish[]>;

  constructor(private wishQuery: WishQuery, private wishSerice: WishService) {}

  ngOnInit(): void {
    this.wishSerice.getWishList();

    this.wishList = this.wishQuery.selectAll();
  }
}
