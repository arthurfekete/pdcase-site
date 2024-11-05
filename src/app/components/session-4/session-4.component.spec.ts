import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session4Component } from './session-4.component';

describe('Session4Component', () => {
  let component: Session4Component;
  let fixture: ComponentFixture<Session4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Session4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
