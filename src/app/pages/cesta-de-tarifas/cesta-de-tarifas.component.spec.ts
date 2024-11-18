import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaDeTarifasComponent } from './cesta-de-tarifas.component';

describe('CestaDeTarifasComponent', () => {
  let component: CestaDeTarifasComponent;
  let fixture: ComponentFixture<CestaDeTarifasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestaDeTarifasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CestaDeTarifasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
