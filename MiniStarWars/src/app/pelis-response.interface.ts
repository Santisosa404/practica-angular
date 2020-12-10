import { Pelis } from "./pelis.interface";

export interface PelisResponse {

  count: number;
  next?: any;
  previous?: any;
  results: Pelis[];
}
