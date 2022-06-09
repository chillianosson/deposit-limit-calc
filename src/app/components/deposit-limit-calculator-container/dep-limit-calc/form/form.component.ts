import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChange,
	ViewChild,
	ViewEncapsulation
} from "@angular/core";
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { MatDatepicker } from "@angular/material/datepicker";
import { TranslateService } from "@ngx-translate/core";

import { DepositLimitCalcFormValue } from "../dep-limit-calc.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit, OnChanges {
  @Output() calculate = new EventEmitter<DepositLimitCalcFormValue>();
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date> | undefined;
  @ViewChild('form', { static: true }) depositLimitForm:
    | FormGroupDirective
    | undefined;

  @Input() max = { value: 4000 };
  @Input() currency = { value: 'SEK' };
  @Input() testId = '';
  @Input() type = '';

  formGroup: FormGroup = this.formBuilder.group({
    amount: this.formBuilder.control('', [
      Validators.required,
      Validators.max(4000),
      Validators.pattern('[0-9]+'),
    ]),
    date: this.formBuilder.control('', Validators.required),
    time: this.formBuilder.control('', Validators.required),
  });

  forbidden: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    console.log('type is ', this.type);
  }

  ngOnChanges(changes: { type?: SimpleChange }): void {
    console.log('type is ', this.type);
    if (changes.type) {
      if (this.depositLimitForm) {
        this.resetForm(this.depositLimitForm);
      }
    }
  }

  getDisabled() {
    return this.type === 'amount'
      ? this.formGroup.controls.amount.invalid
      : this.formGroup.controls.date.invalid ||
          this.formGroup.controls.time.invalid;
  }

  resetForm(form: FormGroupDirective) {
    if (form) {
      form.resetForm({
        amount: '',
        date: '',
        time: '',
      });
    }
  }

  onFocused(thingy: any) {
    console.log('thingy is ', thingy);
  }

  onCalculate(): void {
    const data = {
      amount: this.formGroup.controls.amount.value,
      date: this.formGroup.controls.date.value,
      time: this.formGroup.controls.time.value,
    };

    this.calculate.emit({
      data,
    });
    console.log('testId is ', this.testId);
    console.log('onCalculate called with data', data);
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== this.forbidden[0] && day !== this.forbidden[1];
  };

  getTimeErrors() {
    if (this.formGroup.controls.time.hasError('required')) {
      return this.translateService.instant(
        'responsible-gaming.deposit-limit-calculator.component.input.errors.time.required'
      );
    }
  }

  getAmountErrors() {
    if (this.formGroup.controls.amount.hasError('required')) {
      return this.translateService.instant(
        'responsible-gaming.deposit-limit-calculator.component.input.errors.amount.required'
      );
    }

    if (this.formGroup.controls.amount.hasError('max')) {
      return this.translateService.instant(
        'responsible-gaming.deposit-limit-calculator.component.input.errors.amount.maximum',
        { value: this.max.value }
      );
    }

    if (this.formGroup.controls.amount.hasError('pattern')) {
      return this.translateService.instant('This only accepts numbers', {
        value: this.max.value,
      });
    }
  }

  getDateErrors() {
    if (this.formGroup.controls.amount.hasError('required')) {
      return this.translateService.instant(
        'responsible-gaming.deposit-limit-calculator.component.input.errors.date.required'
      );
    }
  }
}
