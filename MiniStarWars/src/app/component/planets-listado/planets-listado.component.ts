import { Component, OnInit } from '@angular/core';
import { PlanetsService } from 'src/app/services/planets.service';
import {Planet} from '../../planet.interface';
@Component({
  selector: 'app-planets-listado',
  templateUrl: './planets-listado.component.html',
  styleUrls: ['./planets-listado.component.scss']
})
export class PlanetsListadoComponent implements OnInit {

  listadoPlanetas:Planet[];
  constructor(private planetService:PlanetsService) { }

  columnsToDisplay = ['name', 'rotation_period','orbital_period','diameter','climate','gravity','terrain','surface_water','population'];

  ngOnInit(): void {
    this.loadPlanet();
  }

  loadPlanet(){
    this.planetService.getPlanets().subscribe(resp => {
      this.listadoPlanetas=resp.results;
    });
  }

}
