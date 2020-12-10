import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../interface/people-response.interface';

const people_url="https://swapi.dev/api/people/";

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  constructor(private http:HttpClient) { }

  public getPeople():Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(people_url);
  }
}
