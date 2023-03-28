import { TestBed } from '@angular/core/testing';
import { userServiceService } from './userService.service';


describe('ServiceService', () => {
  let service: userServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(userServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
