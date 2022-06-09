import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

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
    amount: this.formBuilder.control('', [
      Validators.required,
      Validators.max(4000),
    ]),
    date: this.formBuilder.control(''),
    time: this.formBuilder.control(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {}

  onCalculate(): void {
    const data = {
      amount: this.formGroup.controls.amount.value,
      date: this.formGroup.controls.date.value,
      time: this.formGroup.controls.time.value,
    };

    console.log('onCalculate called with data', data);
  }

  onRemindMe(): void {
    console.log('onRemindMe called');
  }

  onIndexChange(): void {
    console.log('index changed');
    this.formGroup.reset();
  }

  getErrorMessage() {
    if (this.formGroup.controls.amount.hasError('required')) {
      return this.translateService.instant(
        'responsible-gaming.deposit-limit-calculator.component.input.errors.amount.required'
      );
    }

    if (this.formGroup.controls.amount.hasError('max')) {
      return 'Maximum deposit is 4000 SEK based on your deposit limit';
    }

    return;
    // return this.formGroup.controls.amount.hasError('amount')
    //   ? 'Not a valid amount'
    //   : '';
  }
}
