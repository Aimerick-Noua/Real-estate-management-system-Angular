import { TestBed } from '@angular/core/testing';

import { PropertyImageServiceService } from './property-image-service.service';

describe('PropertyImageServiceService', () => {
  let service: PropertyImageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyImageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
