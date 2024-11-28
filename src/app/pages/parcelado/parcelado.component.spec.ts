import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceladoComponent } from './parcelado.component';

describe('ParceladoComponent', () => {
  let component: ParceladoComponent;
  let fixture: ComponentFixture<ParceladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParceladoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParceladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
