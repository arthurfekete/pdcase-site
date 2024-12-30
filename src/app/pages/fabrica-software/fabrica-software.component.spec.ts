import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricaSoftwareComponent } from './fabrica-software.component';

describe('FabricaSoftwareComponent', () => {
  let component: FabricaSoftwareComponent;
  let fixture: ComponentFixture<FabricaSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricaSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricaSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
