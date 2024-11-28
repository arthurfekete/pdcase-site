import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupancaComponent } from './poupanca.component';

describe('PoupancaComponent', () => {
  let component: PoupancaComponent;
  let fixture: ComponentFixture<PoupancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoupancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoupancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
