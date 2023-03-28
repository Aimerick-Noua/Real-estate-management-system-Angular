import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordDashbComponent } from './landlord-dashb.component';

describe('LandlordDashbComponent', () => {
  let component: LandlordDashbComponent;
  let fixture: ComponentFixture<LandlordDashbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandlordDashbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlordDashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
