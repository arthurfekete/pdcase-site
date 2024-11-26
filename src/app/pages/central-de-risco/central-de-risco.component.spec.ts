import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralDeRiscoComponent } from './central-de-risco.component';

describe('CentralDeRiscoComponent', () => {
  let component: CentralDeRiscoComponent;
  let fixture: ComponentFixture<CentralDeRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralDeRiscoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralDeRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
