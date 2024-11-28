import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoGerenciadorComponent } from './nucleo-gerenciador.component';

describe('NucleoGerenciadorComponent', () => {
  let component: NucleoGerenciadorComponent;
  let fixture: ComponentFixture<NucleoGerenciadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NucleoGerenciadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NucleoGerenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
