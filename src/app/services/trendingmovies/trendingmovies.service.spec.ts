import { TestBed } from '@angular/core/testing';

import { TrendingmoviesService } from './trendingmovies.service';

describe('TrendingmoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingmoviesService = TestBed.get(TrendingmoviesService);
    expect(service).toBeTruthy();
  });
});
