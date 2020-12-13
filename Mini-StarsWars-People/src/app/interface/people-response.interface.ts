export interface PeopleResponse {
  count: number;
  next: string;
  previous?: any;
  results: PeopleResponse[];
}

export interface PeopleResult {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
}
