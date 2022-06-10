import { ChangeDetectionStrategy, Component, HostBinding, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

import { DepositLimitCalculatorResult, DepositLimitCalculatorType, InformationalTooltip } from "./dep-limit-calc.model";

@Component({
  selector: 'app-dep-limit-calc',
  templateUrl: './dep-limit-calc.component.html',
  styleUrls: ['./dep-limit-calc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DepLimitCalcComponent implements OnInit {
  result: DepositLimitCalculatorResult | undefined;
  type = DepositLimitCalculatorType.amount;
  informationalTooltip = InformationalTooltip;

  currency = { value: 'SEK' };
  max = { value: 4000 };
  selectedIndex = 0;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.onIndexChange(0);
  }

  onRemindMe(): void {
    console.log('onRemindMe called');
  }

  onIndexChange(index: any): void {
    this.type =
      index === 0
        ? DepositLimitCalculatorType.amount
        : DepositLimitCalculatorType.date;
  }
}
