import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListStore } from 'src/app/wish/wish-list/state/wish-list.store';

@Injectable({ providedIn: 'root' })
export class WishListService {
  constructor(private wishListStore: WishListStore, private http: HttpClient) {}

  getWishList(): Observable<WishListResponse> {
    return this.http.get<WishListResponse>('Wish/GetWishList').pipe(
      tap((wishes) => {
        return this.wishListStore.update(wishes);
      })
    );
  }

  completeWish(id: number): Observable<boolean> {
    return this.http.get<boolean>(`Wish/CompleteWish?id=${id}`);
  }
}
