import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreirasHeaderComponent } from './carreiras-header.component';

describe('CarreirasHeaderComponent', () => {
  let component: CarreirasHeaderComponent;
  let fixture: ComponentFixture<CarreirasHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreirasHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreirasHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
