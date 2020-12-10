import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';

const pokemon_url = "https://pokeapi.co/api/v2/pokemon";


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor(private http:HttpClient) { }

public getPokemon():Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(pokemon_url);
}




}
