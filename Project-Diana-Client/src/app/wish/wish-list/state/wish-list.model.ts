import { Wish } from 'src/app/wish/state/wish.model';

export interface WishListResponse {
  albumWishes: WishList[];
  bookWishes: WishList[];
  gameWishes: WishList[];
  movieWishes: WishList[];
}

export function createWishList(): WishListResponse {
  return {
    albumWishes: [],
    bookWishes: [],
    gameWishes: [],
    movieWishes: [],
  } as WishListResponse;
}

export interface WishList {
  category: string;
  wishes: Wish[];
}
