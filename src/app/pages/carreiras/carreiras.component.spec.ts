import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreirasComponent } from './carreiras.component';

describe('CarreirasComponent', () => {
  let component: CarreirasComponent;
  let fixture: ComponentFixture<CarreirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreirasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarreirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
