import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentEmailComponent } from './agent-email.component';

describe('AgentEmailComponent', () => {
  let component: AgentEmailComponent;
  let fixture: ComponentFixture<AgentEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
