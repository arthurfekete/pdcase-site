import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptacoesMercadosComponent } from './captacoes-mercados.component';

describe('CaptacoesMercadosComponent', () => {
  let component: CaptacoesMercadosComponent;
  let fixture: ComponentFixture<CaptacoesMercadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaptacoesMercadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptacoesMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
