import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarioInssComponent } from './beneficiario-inss.component';

describe('BeneficiarioInssComponent', () => {
  let component: BeneficiarioInssComponent;
  let fixture: ComponentFixture<BeneficiarioInssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiarioInssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiarioInssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
