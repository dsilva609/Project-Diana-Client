export interface Wish {
  id: number | string;
  dateAdded: Date;
  notes: string;
  owned: boolean;
  title: string;
}

export function createWish(params: Partial<Wish>): Wish {
  return {
    id: null,
    dateAdded: null,
    notes: '',
    owned: false,
    title: '',
  } as Wish;
}

export interface WishListResponse {
  albumWishes: WishList[];
  bookWishes: WishList[];
  gameWishes: WishList[];
  movieWishes: WishList[];
}

export interface WishList {
  category: string;
  wishes: Wish[];
}
