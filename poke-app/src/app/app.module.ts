import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoPokemonComponent } from './listado-pokemon/listado-pokemon.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { PokemonServiceService } from './services/pokemon-service.service';
@NgModule({
  declarations: [
    AppComponent,
    ListadoPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
