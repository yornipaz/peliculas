import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Pelicula } from '../interfaces/pelicula';
import { environment } from 'src/environments/environment';

import { ApiResponse } from '../interfaces/api-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  

  constructor(private http: HttpClient) { }

   getData(page:number):Observable<ApiResponse>{
     const URL= environment.baseUrl+`movie/popular?api_key=${environment.apiKey}&page=${page} `;


     return this.http.get<ApiResponse>(URL)


  }
}
