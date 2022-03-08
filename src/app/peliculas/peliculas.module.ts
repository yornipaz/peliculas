import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MovieComponent} from './pelicula/pelicula.component'
import { HttpClientModule } from '@angular/common/http';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { ItemComponent } from './item/item.component';




@NgModule({
  declarations: [
  
    MovieComponent,
    ItemComponent,
  
  ],
  imports: [
    CommonModule,
   
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
