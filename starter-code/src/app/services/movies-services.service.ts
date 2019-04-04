import { Injectable } from '@angular/core';

@Injectable()
export class MoviesServicesService {
  moviesList: Array<Imovies> = []
  constructor() { }

  getMovies(): Array<Imovies> {
    return  this.moviesList;
  }

  getMovie(idMovie: number){

  }
}
