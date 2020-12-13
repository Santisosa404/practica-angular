import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleResult } from '../interface/people-response.interface';
import { PeopleServiceService } from '../service/people-service.service';

@Component({
  selector: 'app-listado-people',
  templateUrl: './listado-people.component.html',
  styleUrls: ['./listado-people.component.scss']
})
export class ListadoPeopleComponent implements OnInit {
  displayedColumns: string[] = ["name", "height", "birth_year", "gender", "homeworld", "url", ];
  dataSource = new MatTableDataSource();
  constructor(private peopleService:PeopleServiceService ) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(peo =>{
      this.dataSource.data = peo.results;
    });
  }

}
