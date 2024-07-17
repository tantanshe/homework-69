export interface Show {
  id: number;
  name: string;
  genres: [];
  summary: string;
  image: string;
}

export interface SearchApi {
  show: Show;
}