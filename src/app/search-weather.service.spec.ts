import { TestBed } from '@angular/core/testing';

import { SearchWeatherService } from './search-weather.service';

describe('SearchWeatherService', () => {
  let service: SearchWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
