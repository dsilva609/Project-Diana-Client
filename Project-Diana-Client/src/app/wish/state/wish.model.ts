export interface Wish {
  id: string;
  apiId: string;
  category: string;
  dateAdded: Date;
  dateModified: Date;
  imageUrl: string;
  isOwned: boolean;
  itemType: number;
  notes: string;
  title: string;
}

export function createWish(): Wish {
  return {
    id: null,
    apiId: '',
    category: '',
    dateAdded: null,
    dateModified: null,
    imageUrl: '',
    isOwned: false,
    itemType: 0,
    notes: '',
    title: '',
  } as Wish;
}
