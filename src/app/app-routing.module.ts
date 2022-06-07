import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DepositLimitCalculatorComponent } from "./components/deposit-limit-calculator/deposit-limit-calculator.component";

const routes: Routes = [
  { path: '', component: DepositLimitCalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
