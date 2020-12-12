import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieList } from '../movie.datasource';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movieList: Movie[] = [];
  movieLength: number;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }


  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies=> {
      this.movieList = movies.slice(0,10);
      this.movieLength = movies.length;
    })
  }
}
