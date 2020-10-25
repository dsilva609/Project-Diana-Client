export interface Book {
  id: number;
  author: string;
  category: string;
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
  publisher: string;
  timesCompleted: number;
  title: string;
  type: string;
  userID: string;
  yearReleased: number;
}

export function createBook(): Book {
  return {
    id: 0,
    author: '',
    category: '',
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
    publisher: '',
    timesCompleted: 0,
    title: '',
    type: '',
    userID: '',
    yearReleased: 0,
  } as Book;
}
