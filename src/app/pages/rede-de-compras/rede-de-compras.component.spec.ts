import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeDeComprasComponent } from './rede-de-compras.component';

describe('RedeDeComprasComponent', () => {
  let component: RedeDeComprasComponent;
  let fixture: ComponentFixture<RedeDeComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedeDeComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeDeComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
