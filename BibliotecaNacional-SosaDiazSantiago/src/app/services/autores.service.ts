import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutoresResponse } from '../interfaces/autores-response.interface';

const autoresJsonUrl = 'http://www.bne.es/media/datosgob/dominiopublico/dominiopublico1939.json';
const autoresJsonArchivo = './assets/dominiopublico1939.json';
@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private http: HttpClient) { }

  public getAutores(): Observable<AutoresResponse[]>{
    return this.http.get<AutoresResponse[]>(autoresJsonArchivo);
  }

}
