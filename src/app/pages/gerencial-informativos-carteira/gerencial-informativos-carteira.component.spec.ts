import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerencialInformativosCarteiraComponent } from './gerencial-informativos-carteira.component';

describe('GerencialInformativosCarteiraComponent', () => {
  let component: GerencialInformativosCarteiraComponent;
  let fixture: ComponentFixture<GerencialInformativosCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerencialInformativosCarteiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerencialInformativosCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
