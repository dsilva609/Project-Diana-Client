import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wish } from 'src/app/wish/state/wish.model';
import { WishStore } from 'src/app/wish/state/wish.store';

@Injectable({ providedIn: 'root' })
export class WishService {
  constructor(private wishStore: WishStore, private http: HttpClient) {}

  getWishList(): void {
    this.http.get<Wish[]>('Wish/GetWishList').subscribe((wishes) => {
      this.wishStore.set(wishes);
    });
  }

  completeWish(id: number): void {
    this.http.get(`Wish/CompleteWish?id=${id}`).subscribe();
  }
}
