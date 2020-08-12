import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListStore } from 'src/app/wish/wish-list/state/wish-list.store';

@Injectable({ providedIn: 'root' })
export class WishListService {
  constructor(private wishStore: WishListStore, private http: HttpClient) {}

  getWishList(): void {
    this.http.get<WishListResponse>('Wish/GetWishList').subscribe((wishes) => {
      this.wishStore.update(wishes);
    });
  }

  completeWish(id: number): void {
    this.http.get(`Wish/CompleteWish?id=${id}`).subscribe();
  }
}
