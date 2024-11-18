import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsBrComponent } from './mps-br.component';

describe('MpsBrComponent', () => {
  let component: MpsBrComponent;
  let fixture: ComponentFixture<MpsBrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpsBrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpsBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
