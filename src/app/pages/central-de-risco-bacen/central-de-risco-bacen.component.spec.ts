import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralDeRiscoBacenComponent } from './central-de-risco-bacen.component';

describe('CentralDeRiscoBacenComponent', () => {
  let component: CentralDeRiscoBacenComponent;
  let fixture: ComponentFixture<CentralDeRiscoBacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentralDeRiscoBacenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralDeRiscoBacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
