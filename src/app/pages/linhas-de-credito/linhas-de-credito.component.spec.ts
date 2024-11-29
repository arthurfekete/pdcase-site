import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasDeCreditoComponent } from './linhas-de-credito.component';

describe('LinhasDeCreditoComponent', () => {
  let component: LinhasDeCreditoComponent;
  let fixture: ComponentFixture<LinhasDeCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinhasDeCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhasDeCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
