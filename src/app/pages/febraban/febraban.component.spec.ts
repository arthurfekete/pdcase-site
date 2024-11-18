import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebrabanComponent } from './febraban.component';

describe('FebrabanComponent', () => {
  let component: FebrabanComponent;
  let fixture: ComponentFixture<FebrabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FebrabanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FebrabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
