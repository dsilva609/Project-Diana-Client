import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishQuery } from 'src/app/wish/state/wish.query';
import { WishService } from 'src/app/wish/state/wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent implements OnInit {
  tableColumns: string[] = ['title', 'owned', 'date-added'];
  wishList: Observable<Wish[]>;

  constructor(private wishQuery: WishQuery, private wishSerice: WishService) {}

  ngOnInit(): void {
    this.wishSerice.getWishList();

    this.wishList = this.wishQuery.selectAll();
  }
}
