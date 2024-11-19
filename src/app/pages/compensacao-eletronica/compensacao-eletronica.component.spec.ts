import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensacaoEletronicaComponent } from './compensacao-eletronica.component';

describe('CompensacaoEletronicaComponent', () => {
  let component: CompensacaoEletronicaComponent;
  let fixture: ComponentFixture<CompensacaoEletronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompensacaoEletronicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompensacaoEletronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
