import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositLimitCalculatorComponent } from './deposit-limit-calculator.component';

describe('DepositLimitCalculatorComponent', () => {
  let component: DepositLimitCalculatorComponent;
  let fixture: ComponentFixture<DepositLimitCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositLimitCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositLimitCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
