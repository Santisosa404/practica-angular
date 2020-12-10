import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-people',
  templateUrl: './listado-people.component.html',
  styleUrls: ['./listado-people.component.scss']
})
export class ListadoPeopleComponent implements OnInit {
  displayedColumns: string[] = ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender", "homeworld", "films", "species", "vehicles", "starships", "created", "edited", "url"];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
