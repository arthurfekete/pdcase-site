import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Session1Component } from './session-1.component';

describe('Session1Component', () => {
  let component: Session1Component;
  let fixture: ComponentFixture<Session1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Session1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Session1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
