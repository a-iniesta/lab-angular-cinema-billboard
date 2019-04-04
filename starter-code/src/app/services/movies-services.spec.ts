import { TestBed, inject } from '@angular/core/testing';

import { MoviesServices } from './movies-services';

describe('MoviesServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesServices]
    });
  });

  it('should be created', inject([MoviesServices], (service: MoviesServices) => {
    expect(service).toBeTruthy();
  }));
});
