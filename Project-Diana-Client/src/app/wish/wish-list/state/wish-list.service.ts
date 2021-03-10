import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { WishListResponse } from 'src/app/wish/wish-list/state/wish-list.model';
import { WishListStore } from 'src/app/wish/wish-list/state/wish-list.store';

@Injectable({ providedIn: 'root' })
export class WishListService {
  constructor(private wishListStore: WishListStore, private http: HttpClient) {}

  deleteWishById(wishId: number): Observable<boolean> {
    if (wishId === 0) {
      return;
    }

    const paramList = new HttpParams().set('id', wishId.toString());

    return this.http.delete('Wish/DeleteWish', { params: paramList }).pipe(
      map((_) => {
        return true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  removeAlbumWish(category: string, id: number): void {
    const albumWishes = this.wishListStore.getValue().albumWishes;
    const albumWishCategoryIndex = albumWishes.findIndex(
      (list) => list.category === category
    );

    const filteredWishes = this.wishListStore
      .getValue()
      .albumWishes.find((list) => list.category === category)
      .wishes.filter((w) => w.id !== id);

    albumWishes[albumWishCategoryIndex].wishes = filteredWishes;

    const wishes = this.wishListStore.getValue();

    if (filteredWishes.length) {
      wishes.albumWishes.wishes = filteredWishes;
    } else {
      wishes.albumWishes.splice(albumWishCategoryIndex);
    }

    this.wishListStore.update(wishes);
  }

  removeBookWish(category: string, id: number): void {
    const bookWishes = this.wishListStore.getValue().bookWishes;
    const bookWishCategoryIndex = bookWishes.findIndex(
      (list) => list.category === category
    );

    const filteredWishes = this.wishListStore
      .getValue()
      .bookWishes.find((list) => list.category === category)
      .wishes.filter((w) => w.id !== id);

    bookWishes[bookWishCategoryIndex].wishes = filteredWishes;

    const wishes = this.wishListStore.getValue();

    if (filteredWishes.length) {
      wishes.bookWishes.wishes = filteredWishes;
    } else {
      wishes.bookWishes.splice(bookWishCategoryIndex);
    }

    this.wishListStore.update(wishes);
  }

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
