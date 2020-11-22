import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PelisResponse } from '../pelis-response.interface';

const authURL = 'https://swapi.dev/api/films/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PelisService{

  constructor(private http:HttpClient) { }
  getPelis(): Observable<PelisResponse> {
    return this.http.get<PelisResponse>(
      authURL,
      requestOptions
    );
  }
}
