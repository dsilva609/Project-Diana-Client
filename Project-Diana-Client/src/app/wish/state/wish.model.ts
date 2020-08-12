export interface Wish {
  id: number | string;
  apiID: string;
  category: string;
  dateAdded: Date;
  dateModified: Date;
  imageUrl: string;
  itemType: number;
  notes: string;
  owned: boolean;
  title: string;
}

export function createWish(): Wish {
  return {
    id: null,
    apiID: '',
    category: '',
    dateAdded: null,
    dateModified: null,
    imageUrl: '',
    itemType: 0,
    notes: '',
    owned: false,
    title: '',
  } as Wish;
}
