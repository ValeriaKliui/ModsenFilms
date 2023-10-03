export interface FilmI {
  title: string;
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  id: number;
  overview?: string;
}
export interface FilmsResponse {
  results: FilmI[];
  total_results: number;
}
export interface VideoI {
  id: number;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  size: number;
  type: string;
}
