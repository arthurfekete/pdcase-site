import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session2Component } from './session-2.component';

describe('Session2Component', () => {
  let component: Session2Component;
  let fixture: ComponentFixture<Session2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Session2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
