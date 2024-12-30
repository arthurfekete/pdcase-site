import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterFebrabanComponent } from './inter-febraban.component';

describe('InterFebrabanComponent', () => {
  let component: InterFebrabanComponent;
  let fixture: ComponentFixture<InterFebrabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterFebrabanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterFebrabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
