import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCarteiraComponent } from './info-carteira.component';

describe('InfoCarteiraComponent', () => {
  let component: InfoCarteiraComponent;
  let fixture: ComponentFixture<InfoCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCarteiraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
