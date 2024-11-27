import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesourariaComponent } from './tesouraria.component';

describe('TesourariaComponent', () => {
  let component: TesourariaComponent;
  let fixture: ComponentFixture<TesourariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesourariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesourariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
