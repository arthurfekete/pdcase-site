import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacaoDeCreditoComponent } from './simulacao-de-credito.component';

describe('SimulacaoDeCreditoComponent', () => {
  let component: SimulacaoDeCreditoComponent;
  let fixture: ComponentFixture<SimulacaoDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulacaoDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulacaoDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
