import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServices } from '../services/movies-services';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movie: Imovies;
  constructor(private rutaActiva: ActivatedRoute,
              private moviesServices: MoviesServices) {

  }

  ngOnInit() {
    this.movie = this.moviesServices.getMovie(+this.rutaActiva.snapshot.params.movieID)
  }

  returnHome() {

  }
}
