import { Injectable } from '@angular/core';
import { LoadMovies } from './config/load-moovies';

@Injectable()
export class MoviesServices {
  loadMovies: LoadMovies = new LoadMovies() ;
  moviesList: Array<Imovies> = []
  constructor() {
    this.moviesList = this.loadMovies.getMoviesList;
  }

  getMovies(): Array<Imovies> {
    return  this.moviesList;
  }

  getMovie(idMovie: number){
    return this.moviesList.filter(movie => movie.id === idMovie);
  }
}
