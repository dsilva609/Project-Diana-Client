export interface Book {
  id: number;
  author: string;
  category: string;
  completionStatus: number;
  countryOfOrigin: string;
  countryPurchased: string;
  dateAdded: string;
  datePurchased: string;
  dateUpdated: string;
  genre: string;
  hardcover: boolean;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  isFirstEdition: boolean;
  isNew: boolean;
  isPhysical: boolean;
  isReissue: boolean;
  isShowcased: boolean;
  language: string;
  lastCompleted: string;
  locationPurchased: string;
  notes: string;
  pageCount: number;
  publisher: string;
  reissueYear: number;
  timesCompleted: number;
  title: string;
  type: number;
  userId: string;
  yearReleased: number;
}

export function createBook(): Book {
  return {
    id: 0,
    author: '',
    category: '',
    completionStatus: 0,
    countryOfOrigin: '',
    countryPurchased: '',
    dateAdded: '',
    datePurchased: '',
    dateUpdated: '',
    genre: '',
    hardcover: false,
    imageUrl: '',
    isbn10: '',
    isbn13: '',
    isFirstEdition: false,
    isNew: false,
    isPhysical: false,
    isReissue: false,
    isShowcased: false,
    language: '',
    lastCompleted: '',
    locationPurchased: '',
    notes: '',
    pageCount: 0,
    publisher: '',
    reissueYear: 0,
    timesCompleted: 0,
    title: '',
    type: 0,
    userId: '',
    yearReleased: 0,
  } as Book;
}

export const BOOK_MEDIA_TYPES = [
  { name: 'Novel', value: 0 },
  { name: 'Comic', value: 1 },
  { name: 'Manga', value: 2 },
];

export function getBookMediaTypeDisplayName(value: number): string {
  return BOOK_MEDIA_TYPES.find((x) => x.value === value).name;
}
