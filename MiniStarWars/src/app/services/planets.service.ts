import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Planet } from '../planet.interface';
import { PlanetResponse } from '../planet-response.interface';

const authURL = 'https://swapi.dev/api/planets/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<PlanetResponse> {
    return this.http.get<PlanetResponse>(
      authURL,
      requestOptions
    );
  }




}
