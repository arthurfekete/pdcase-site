import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioIgualdadeSalarialComponent } from './relatorio-igualdade-salarial.component';

describe('RelatorioIgualdadeSalarialComponent', () => {
  let component: RelatorioIgualdadeSalarialComponent;
  let fixture: ComponentFixture<RelatorioIgualdadeSalarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioIgualdadeSalarialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioIgualdadeSalarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
