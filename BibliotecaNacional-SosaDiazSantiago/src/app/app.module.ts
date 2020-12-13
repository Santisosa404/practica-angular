import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AutoresService } from './services/autores.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    AutoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
