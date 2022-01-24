export interface MovieSearchResult {
  countryOfOrigin: string;
  distributor: string;
  genre: string;
  id: number;
  imageUrl: string;
  language: string;
  movieCategory: number;
  title: string;
  yearReleasedOn: number;
}

export function createMovieSearchResult(): MovieSearchResult {
  return {
    countryOfOrigin: '',
    distributor: '',
    genre: '',
    id: 0,
    imageUrl: '',
    language: '',
    movieCategory: 0,
    title: '',
    yearReleasedOn: 0,
  } as MovieSearchResult;
}
