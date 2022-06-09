import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-deposit-limit-calculator',
  templateUrl: './deposit-limit-calculator.component.html',
  styleUrls: ['./deposit-limit-calculator.component.scss'],
})
export class DepositLimitCalculatorComponent implements OnInit {
  displayResult: boolean | undefined;
  formGroup: FormGroup;
  calculatedResult = 4000;

  constructor() {
    this.formGroup = new FormGroup({
      amount: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.displayResult = false;
  }

  onCalculate(boo: boolean) {
    this.displayResult = boo;
  }

  onRemindMe() {
    console.log('calculate');
  }
}
