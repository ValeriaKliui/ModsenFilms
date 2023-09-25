export enum genres {
  ALL = 0,
  ADVENTURE = 12,
  DRAMA = 18,
  HORROR = 27,
  ACTION = 28,
  CRIME = 80,
  DOCUMENTARY = 99,
  ROMANCE = 10749,
}

export type GenresType = keyof typeof genres;
