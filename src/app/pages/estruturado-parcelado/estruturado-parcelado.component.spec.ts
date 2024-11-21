import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturadoParceladoComponent } from './estruturado-parcelado.component';

describe('EstruturadoParceladoComponent', () => {
  let component: EstruturadoParceladoComponent;
  let fixture: ComponentFixture<EstruturadoParceladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstruturadoParceladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstruturadoParceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
