import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrancaDeCreditoComponent } from './cobranca-de-credito.component';

describe('CobrancaDeCreditoComponent', () => {
  let component: CobrancaDeCreditoComponent;
  let fixture: ComponentFixture<CobrancaDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CobrancaDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobrancaDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
