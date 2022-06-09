import { Component, OnInit } from "@angular/core";

import { DepositLimitCalculatorResult, InformationalTooltip } from "./dep-limit-calc.model";

@Component({
  selector: 'app-dep-limit-calc',
  templateUrl: './dep-limit-calc.component.html',
  styleUrls: ['./dep-limit-calc.component.scss'],
})
export class DepLimitCalcComponent implements OnInit {
  result: DepositLimitCalculatorResult | undefined;
  displayResult = false;
  informationalTooltip = InformationalTooltip;
  constructor() {}

  ngOnInit(): void {}

  onCalculate(): void {
    console.log('onCalculate called');
  }

  onRemindMe(): void {
    console.log('onRemindMe called');
  }
}
