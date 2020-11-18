import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticulosComponentComponent } from './Component/articulos-component/articulos-component.component';
import {ListaArticulosComponentComponent} from './Component/lista-articulos-component/lista-articulos-component.component';
import { BannerComponentComponent } from './Component/banner-component/banner-component.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponentComponent,
    ListaArticulosComponentComponent,
    BannerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
