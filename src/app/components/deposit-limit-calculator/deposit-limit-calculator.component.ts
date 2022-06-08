import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-deposit-limit-calculator',
  templateUrl: './deposit-limit-calculator.component.html',
  styleUrls: ['./deposit-limit-calculator.component.scss'],
})
export class DepositLimitCalculatorComponent implements OnInit {
  displayResult: boolean | undefined;
  calculatedResult = 4000;
  constructor() {}

  ngOnInit(): void {
    this.displayResult = true;
  }

  onCalculate(boo: boolean) {
    this.displayResult = boo;
  }

  onRemindMe() {
    console.log('calculate');
  }
}
