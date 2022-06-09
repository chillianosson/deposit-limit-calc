import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DepLimitCalcComponent } from "./components/deposit-limit-calculator-container/dep-limit-calc/dep-limit-calc.component";
import { FormComponent } from "./components/deposit-limit-calculator-container/dep-limit-calc/form/form.component";
import {
	DepositLimitCalculatorContainerComponent
} from "./components/deposit-limit-calculator-container/deposit-limit-calculator-container.component";
import { MaterialModule } from "./material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    DepLimitCalcComponent,
    DepositLimitCalculatorContainerComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
