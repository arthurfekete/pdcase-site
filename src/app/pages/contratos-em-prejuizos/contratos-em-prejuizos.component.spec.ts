import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosEmPrejuizosComponent } from './contratos-em-prejuizos.component';

describe('ContratosEmPrejuizosComponent', () => {
  let component: ContratosEmPrejuizosComponent;
  let fixture: ComponentFixture<ContratosEmPrejuizosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosEmPrejuizosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosEmPrejuizosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
