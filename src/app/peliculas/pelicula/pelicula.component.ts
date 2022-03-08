import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../interfaces/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class MovieComponent implements OnInit {
  movies$: Observable<Movie[]>;

  selectMovie: string;
  page: number;

  constructor(private service:MovieService) {
    this.page = 1;
    this.selectMovie="";
    this.movies$=this.service.getData(this.page);
  }

  ngOnInit(): void {
    this.movies$ = this.service.getData(this.page);
  }
  getSelectedMovie(selectedMovie: string) {
    this.selectMovie = selectedMovie;
  }
  nextData(event: Event) {
    this.page = this.page + 1;
    this.movies$ = this.service.getData(this.page);
  }
}
