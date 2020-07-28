import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishStore } from 'src/app/wish/state/wish.store';

import { WishListResponse } from './wish.model';


@Injectable({ providedIn: 'root' })
export class WishService {
  constructor(private wishStore: WishStore, private http: HttpClient) {}

  getWishList(): void {
    this.http.get<WishListResponse>('Wish/GetWishList').subscribe((wishes) => {
      this.wishStore.update(wishes);
    });
  }

  completeWish(id: number): void {
    this.http.get(`Wish/CompleteWish?id=${id}`).subscribe();
  }
}
