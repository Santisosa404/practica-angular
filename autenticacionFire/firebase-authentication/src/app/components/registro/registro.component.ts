import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/shared/services/authservice.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(public authService : AuthserviceService) { }

  ngOnInit(): void {
  }

}
