import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDasbComponent } from './agent-dasb.component';

describe('AgentDasbComponent', () => {
  let component: AgentDasbComponent;
  let fixture: ComponentFixture<AgentDasbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentDasbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentDasbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
