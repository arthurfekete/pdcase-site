import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoTributariaComponent } from './gestao-tributaria.component';

describe('GestaoTributariaComponent', () => {
  let component: GestaoTributariaComponent;
  let fixture: ComponentFixture<GestaoTributariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestaoTributariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoTributariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
