import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepLimitCalcComponent } from './dep-limit-calc.component';

describe('DepLimitCalcComponent', () => {
  let component: DepLimitCalcComponent;
  let fixture: ComponentFixture<DepLimitCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepLimitCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepLimitCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
