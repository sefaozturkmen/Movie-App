import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MovieList } from './movie.datasource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class MovieService {

  private apiMovieListUrl = 'api/movielist';

  constructor(
    private loggingService : LoggingService,
    private http: HttpClient
    ) { }

  getMovies(): Observable<Movie[]>{
    this.loggingService.add('MovieService : Listing Movies..');
    return this.http.get<Movie[]>(this.apiMovieListUrl)
  }

  getMovie(id): Observable<Movie>{
    this.loggingService.add('MovieService : Get detail by id..');
    return this.http.get<Movie>(this.apiMovieListUrl+'/'+id);
  }

  update(movie: Movie):Observable<any> {
    const httpOptions ={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.put(this.apiMovieListUrl, movie, httpOptions)
  }

  add(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.apiMovieListUrl, movie
      )
  }

  delete(movie: Movie): Observable<Movie>{
    return this.http.delete<Movie>(this.apiMovieListUrl+'/'+movie.id);
  }
}
