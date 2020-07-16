import { WishService } from './wish.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
})
export class WishComponent implements OnInit {
  list: any;

  constructor(private wishSerice: WishService) {}

  ngOnInit(): void {
    this.wishSerice.getWishList().subscribe((result) => {
      this.list = result;
    });
  }
}
