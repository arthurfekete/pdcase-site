import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentacaoDeSistemasComponent } from './sustentacao-de-sistemas.component';

describe('SustentacaoDeSistemasComponent', () => {
  let component: SustentacaoDeSistemasComponent;
  let fixture: ComponentFixture<SustentacaoDeSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustentacaoDeSistemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustentacaoDeSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
