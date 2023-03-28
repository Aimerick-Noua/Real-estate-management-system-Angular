import { TestBed } from '@angular/core/testing';

import { ProservService } from './proserv.service';

describe('ProservService', () => {
  let service: ProservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
