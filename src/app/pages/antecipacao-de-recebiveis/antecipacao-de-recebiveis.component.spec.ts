import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecipacaoDeRecebiveisComponent } from './antecipacao-de-recebiveis.component';

describe('AntecipacaoDeRecebiveisComponent', () => {
  let component: AntecipacaoDeRecebiveisComponent;
  let fixture: ComponentFixture<AntecipacaoDeRecebiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntecipacaoDeRecebiveisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntecipacaoDeRecebiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
