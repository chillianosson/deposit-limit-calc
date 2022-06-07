import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DepositLimitCalculatorComponent } from "./components/deposit-limit-calculator/deposit-limit-calculator.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [AppComponent, DepositLimitCalculatorComponent],
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
