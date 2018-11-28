import { TrendingMovie } from './../../models/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private TRENDING_MOVIES = 'https://api.themoviedb.org/3/';
  private APIKEY = '?api_key=6b28e739331f7d86bcd6e5e8e7d9cb08';
  private IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w500/';
  results: any[];
  constructor(private http: HttpClient) { }

  public getTrending(mediaType:string): Observable<any> {
    let url = `${this.TRENDING_MOVIES}trending/${mediaType}/week${this.APIKEY}`
   
    return this.http.get(url).pipe(
      map(res => {
        return res['results'].map(trendingmovie => {
          let evalStr = (trendingmovie.backdrop_path)?trendingmovie.backdrop_path: trendingmovie.profile_path;
          let imageurl =`${this.IMAGE_BASE_URL+ evalStr}`;
          if(mediaType == 'person'){
            return new TrendingMovie(
              trendingmovie.adult,
              imageurl,
              trendingmovie.genre_ids,
              trendingmovie.id,
              trendingmovie.original_language,
              trendingmovie.name,
              trendingmovie.known_for_department,
              trendingmovie.poster_path,
              trendingmovie.release_date,
              trendingmovie.title,
              trendingmovie.video,
              trendingmovie.vote_average,
              trendingmovie.vote_count,
              trendingmovie.popularity
            );
          }else{
            return new TrendingMovie(
              trendingmovie.adult,
              imageurl,
              trendingmovie.genre_ids,
              trendingmovie.id,
              trendingmovie.original_language,
              trendingmovie.original_title,
              trendingmovie.overview,
              trendingmovie.poster_path,
              trendingmovie.release_date,
              trendingmovie.title,
              trendingmovie.video,
              trendingmovie.vote_average,
              trendingmovie.vote_count,
              trendingmovie.popularity
            );
          }
       
        });
      })
    );
  }
}
