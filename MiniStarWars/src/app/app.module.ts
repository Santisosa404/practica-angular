import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsService } from './services/planets.service';
import { PlanetsListadoComponent } from './component/planets-listado/planets-listado.component';
import { PelisListadoComponent } from './component/pelis-listado/pelis-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    PelisListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
