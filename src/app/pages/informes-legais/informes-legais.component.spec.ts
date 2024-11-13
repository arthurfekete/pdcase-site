import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesLegaisComponent } from './informes-legais.component';

describe('InformesLegaisComponent', () => {
  let component: InformesLegaisComponent;
  let fixture: ComponentFixture<InformesLegaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformesLegaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesLegaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
