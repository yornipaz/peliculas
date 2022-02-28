import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'pelicula',loadChildren:()=>import('./peliculas/peliculas.module').then(m=>m.PeliculasModule)},
  {path:'**',redirectTo:'pelicula'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
