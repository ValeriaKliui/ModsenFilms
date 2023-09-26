export enum genres {
  ALL = 0,
  ACTION = 28,
  DRAMA = 18,
  CRIME = 80,
  ROMANTIC = 10749,
  HORROR = 27,
  DOCUMENTARY = 99,
}

export type GenresType = keyof typeof genres;
