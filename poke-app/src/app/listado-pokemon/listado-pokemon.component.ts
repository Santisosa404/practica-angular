import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';
import { PokemonServiceService } from '../services/pokemon-service.service';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.scss']
})
export class ListadoPokemonComponent implements OnInit {
  displayedColumns:String[]=["url","name"];
  dataSource = new MatTableDataSource();

  constructor(private pokemonService:PokemonServiceService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe(pok =>{
      this.dataSource.data = pok.results;
    });
  }

}
