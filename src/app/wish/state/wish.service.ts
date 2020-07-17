import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WishStore } from './wish.store';
import { Wish } from './wish.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WishService {
  constructor(private wishStore: WishStore, private http: HttpClient) {}

  getWishList(): void {
    this.http.get<Wish[]>('Wish/GetWishList').subscribe((wishes) => {
      this.wishStore.set(wishes);
    });
  }
}
