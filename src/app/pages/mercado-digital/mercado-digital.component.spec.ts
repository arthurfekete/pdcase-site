import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoDigitalComponent } from './mercado-digital.component';

describe('MercadoDigitalComponent', () => {
  let component: MercadoDigitalComponent;
  let fixture: ComponentFixture<MercadoDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercadoDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
