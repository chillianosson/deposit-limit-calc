import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositLimitCalculatorContainerComponent } from './deposit-limit-calculator-container.component';

describe('DepositLimitCalculatorContainerComponent', () => {
  let component: DepositLimitCalculatorContainerComponent;
  let fixture: ComponentFixture<DepositLimitCalculatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositLimitCalculatorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositLimitCalculatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
