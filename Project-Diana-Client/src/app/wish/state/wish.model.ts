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
