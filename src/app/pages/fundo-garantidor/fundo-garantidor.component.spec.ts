import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoGarantidorComponent } from './fundo-garantidor.component';

describe('FundoGarantidorComponent', () => {
  let component: FundoGarantidorComponent;
  let fixture: ComponentFixture<FundoGarantidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundoGarantidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundoGarantidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
