import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../../shared/services/authservice.service';
import {MatFormFieldModule} from '@angular/material/form-field';
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
