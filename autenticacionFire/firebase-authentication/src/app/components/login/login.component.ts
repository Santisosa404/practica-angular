import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../shared/services/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthserviceService) { }

  ngOnInit(): void {
  }

}
