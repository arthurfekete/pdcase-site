import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensSmsComponent } from './mensagens-sms.component';

describe('MensagensSmsComponent', () => {
  let component: MensagensSmsComponent;
  let fixture: ComponentFixture<MensagensSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensagensSmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagensSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
