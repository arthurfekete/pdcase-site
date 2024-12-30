import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoDiretoAoConsumidorComponent } from './credito-direto-ao-consumidor.component';

describe('CreditoDiretoAoConsumidorComponent', () => {
  let component: CreditoDiretoAoConsumidorComponent;
  let fixture: ComponentFixture<CreditoDiretoAoConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditoDiretoAoConsumidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoDiretoAoConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
