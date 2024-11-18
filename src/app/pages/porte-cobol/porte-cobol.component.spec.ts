import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorteCobolComponent } from './porte-cobol.component';

describe('PorteCobolComponent', () => {
  let component: PorteCobolComponent;
  let fixture: ComponentFixture<PorteCobolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorteCobolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorteCobolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
