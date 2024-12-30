import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPositivoComponent } from './cadastro-positivo.component';

describe('CadastroPositivoComponent', () => {
  let component: CadastroPositivoComponent;
  let fixture: ComponentFixture<CadastroPositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPositivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
