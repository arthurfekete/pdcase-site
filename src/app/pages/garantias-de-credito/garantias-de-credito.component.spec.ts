import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiasDeCreditoComponent } from './garantias-de-credito.component';

describe('GarantiasDeCreditoComponent', () => {
  let component: GarantiasDeCreditoComponent;
  let fixture: ComponentFixture<GarantiasDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarantiasDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiasDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
