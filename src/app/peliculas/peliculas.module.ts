import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {PeliculaComponent} from './pelicula/pelicula.component'
import { HttpClientModule } from '@angular/common/http';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ItemComponent } from './item/item.component';
import { ItemSelecionadoComponent } from './item-selecionado/item-selecionado.component';



@NgModule({
  declarations: [
    MainComponent,
    PeliculaComponent,
    ItemComponent,
    ItemSelecionadoComponent
  ],
  imports: [
    CommonModule,
   
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
