import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxTableModule } from './ngx-table/ngx-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
