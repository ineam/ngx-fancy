import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxFancierModule} from "../../../ngx-fancier/src/lib/ngx-fancier.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFancierModule,
    NgxFancierModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
