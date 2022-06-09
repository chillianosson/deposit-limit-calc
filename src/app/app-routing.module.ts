import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
	DepositLimitCalculatorContainerComponent
} from "./components/deposit-limit-calculator-container/deposit-limit-calculator-container.component";

const routes: Routes = [
  { path: '', component: DepositLimitCalculatorContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
