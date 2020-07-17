export interface Wish {
  id: number | string;
  dateAdded: Date;
  owned: boolean;
  title: string;
}

export function createWish(params: Partial<Wish>): Wish {
  return {
    id: null,
    dateAdded: null,
    owned: false,
    title: '',
  } as Wish;
}
