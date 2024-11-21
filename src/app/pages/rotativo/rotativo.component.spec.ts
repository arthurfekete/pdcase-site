import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotativoComponent } from './rotativo.component';

describe('RotativoComponent', () => {
  let component: RotativoComponent;
  let fixture: ComponentFixture<RotativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
