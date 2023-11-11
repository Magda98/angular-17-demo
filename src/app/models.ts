export type ResourceUrl = string;

export interface Resource {
  url: ResourceUrl;
  id: string;
  created: string;
  edited: string;
}

export interface PagedResults<T> {
  count: number;
  next?: string;
  previous: string;
  results: T[];
}

export interface People extends Resource {
  birth_year: string;
  eye_color: string;
  films: ResourceUrl[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: ResourceUrl[];
  starships: ResourceUrl[];
  vehicles: ResourceUrl[];
}
