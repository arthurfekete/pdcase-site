import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControladoriaComponent } from './controladoria.component';

describe('ControladoriaComponent', () => {
  let component: ControladoriaComponent;
  let fixture: ComponentFixture<ControladoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControladoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControladoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
