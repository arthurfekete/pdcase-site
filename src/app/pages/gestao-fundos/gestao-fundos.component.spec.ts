import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFundosComponent } from './gestao-fundos.component';

describe('GestaoFundosComponent', () => {
  let component: GestaoFundosComponent;
  let fixture: ComponentFixture<GestaoFundosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoFundosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoFundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
