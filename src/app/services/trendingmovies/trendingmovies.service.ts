import { HttpService } from './../httpservice/http.service';
import { Injectable } from '@angular/core';
import { TrendingMovie } from 'src/app/models/interfaces';


@Injectable({
  providedIn: 'root'
})
export class TrendingmoviesService {

  TrendingMoviesData: TrendingMovie[];

  constructor(private httpService: HttpService) { }

  fetchAndParseTrendingMovies(): Promise<TrendingMovie[]> {
    return new Promise((resolve, reject) => {
      this.httpService.get().subscribe(
        (TrendingMoviesData) => {
          resolve(TrendingMoviesData);
        },
        (error) => {
          Promise.resolve(error);
          throw new Error(JSON.stringify(error));
        }
      );
    });
  }
}
