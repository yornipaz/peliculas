import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {
 data!:ApiResponse;
 selec!:string;
 page : number;
  

  constructor(private   service: PeliculaService) {
    this.data={
      page:0,
      results:[]
    }
    this.page=1;
   }

  ngOnInit(): void {
    this.service.getData(this.page).subscribe(res=>this.data=res);
  }
  getSelecionado(selecionado:string){
   
  this.selec=selecionado;

  }
  nextData(event:Event){
    this.page= this.page+1;
    this.service.getData(this.page).subscribe(res=>this.data=res);


  }

}
