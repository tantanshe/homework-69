export interface Show {
  id: number;
  name: string;
  genres: [];
  summary: string;
  image: {
    medium: string;
  }
}

export interface SearchApi {
  show: Show;
}