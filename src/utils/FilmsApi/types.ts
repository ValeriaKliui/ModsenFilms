export interface FilmType {
  title: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  id?: string;
  overview?: string;
}
export interface FilmsResponse {
  results: FilmType[];
  total_results?: number;
}
