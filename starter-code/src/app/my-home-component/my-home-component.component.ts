import { Component, OnInit } from '@angular/core';
import { MoviesServices } from 'app/services/movies-services';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
listMovies: Array<Imovies> = []
  constructor(private moviesServices: MoviesServices) {

  }

  ngOnInit() {
    this.listMovies = this.moviesServices.getMovies();
  }

  returnHome(){

  }
}
