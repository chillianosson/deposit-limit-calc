import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { DepositLimitCalculatorResult, InformationalTooltip } from "./dep-limit-calc.model";

@Component({
  selector: 'app-dep-limit-calc',
  templateUrl: './dep-limit-calc.component.html',
  styleUrls: ['./dep-limit-calc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DepLimitCalcComponent implements OnInit {
  currency = { value: 'SEK' };
  result: DepositLimitCalculatorResult | undefined;
  displayResult = false;
  informationalTooltip = InformationalTooltip;

  formGroup: FormGroup = this.formBuilder.group({
    amount: this.formBuilder.control(''),
    date: this.formBuilder.control(''),
    time: this.formBuilder.control(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onCalculate(): void {
    console.log('onCalculate called');

    const data = {
      amount: this.formGroup.controls.amount.value,
      date: this.formGroup.controls.date.value,
      time: this.formGroup.controls.time.value,
    };
  }

  onRemindMe(): void {
    console.log('onRemindMe called');
  }
}
