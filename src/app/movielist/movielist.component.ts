import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  title = 'MovieList'

  getTitle() {
    return this.title
  }
  movieList: Movie[];
  selectedMovie: Movie;

  constructor(private movieService: MovieService) { }


  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movieList => {
        this.movieList = movieList;
      });
  }

  add(name:string, imageUrl:string, description:string): void {
    this.movieService.add({
      name,
      imageUrl,
      description
    }as Movie).subscribe(movie => this.movieList.push(movie))
  }

  delete(movie: Movie): void{
    this.movieList = this.movieList.filter(m => m!==movie);
    this.movieService.delete(movie).subscribe();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
