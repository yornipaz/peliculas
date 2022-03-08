import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  {path:'',component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
