import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreBancarioComponent } from './core-bancario.component';

describe('CoreBancarioComponent', () => {
  let component: CoreBancarioComponent;
  let fixture: ComponentFixture<CoreBancarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreBancarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreBancarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
