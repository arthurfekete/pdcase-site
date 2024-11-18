import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrancaBancariaComponent } from './cobranca-bancaria.component';

describe('CobrancaBancariaComponent', () => {
  let component: CobrancaBancariaComponent;
  let fixture: ComponentFixture<CobrancaBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CobrancaBancariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobrancaBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
