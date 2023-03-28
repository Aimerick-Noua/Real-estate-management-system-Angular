import { TestBed } from '@angular/core/testing';

import { PropertyResolveService } from './property-resolve.service';

describe('PropertyResolveService', () => {
  let service: PropertyResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
