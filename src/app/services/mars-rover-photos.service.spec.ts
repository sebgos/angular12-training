import { TestBed } from '@angular/core/testing';

import { MarsRoverPhotosService } from './mars-rover-photos.service';

describe('MarsRoverPhotosService', () => {
  let service: MarsRoverPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsRoverPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
