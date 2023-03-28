import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAdminComponent } from './agent-admin.component';

describe('AgentAdminComponent', () => {
  let component: AgentAdminComponent;
  let fixture: ComponentFixture<AgentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
