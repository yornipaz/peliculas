import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Movie } from '../interfaces/movie';
import { environment } from 'src/environments/environment';

import { ApiResponse } from '../interfaces/api-response';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  

  constructor(private http: HttpClient) { }

   getData(page:number):Observable<Movie[]>{
     const URL= environment.baseUrl+`movie/popular?api_key=${environment.apiKey}&page=${page} `;


     return this.http.get<ApiResponse>(URL).pipe(map(res=>{
       let Movies:Movie[]=res.results.map(res=> {
         return {
           title:res.title
         }
       })
       return Movies;
       
     }))


  }
}
