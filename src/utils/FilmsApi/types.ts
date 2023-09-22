export interface FilmType {
  title: string;
  released: number;
  backdrop_path: string;
  id?: string;
}
export interface FilmsResponse {
  results: FilmType[];
}
