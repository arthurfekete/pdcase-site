import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleDeAtivoComponent } from './controle-de-ativo.component';

describe('ControleDeAtivoComponent', () => {
  let component: ControleDeAtivoComponent;
  let fixture: ComponentFixture<ControleDeAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleDeAtivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleDeAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
