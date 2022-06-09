import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DepLimitCalcComponent } from "./components/deposit-limit-calculator-container/dep-limit-calc/dep-limit-calc.component";
import {
	DepositLimitCalculatorContainerComponent
} from "./components/deposit-limit-calculator-container/deposit-limit-calculator-container.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    DepLimitCalcComponent,
    DepositLimitCalculatorContainerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
