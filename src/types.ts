export interface Show {
  id: number;
  name: string;
  genres: [];
  summary: string;
  image: {
    original: string;
  };
}

export interface SearchApi {
  show: Show;
}