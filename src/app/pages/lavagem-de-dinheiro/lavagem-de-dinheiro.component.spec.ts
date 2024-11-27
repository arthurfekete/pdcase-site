import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavagemDeDinheiroComponent } from './lavagem-de-dinheiro.component';

describe('LavagemDeDinheiroComponent', () => {
  let component: LavagemDeDinheiroComponent;
  let fixture: ComponentFixture<LavagemDeDinheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LavagemDeDinheiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LavagemDeDinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
