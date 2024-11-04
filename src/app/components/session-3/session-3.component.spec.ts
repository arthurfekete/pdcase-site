import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session3Component } from './session-3.component';

describe('Session3Component', () => {
  let component: Session3Component;
  let fixture: ComponentFixture<Session3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Session3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
