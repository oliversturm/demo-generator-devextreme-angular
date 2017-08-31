import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DxButtonModule, DxDateBoxModule } from 'devextreme-angular';

// For date parsing when using Intl localization, please read
// https://github.com/DevExpress/DevExtreme-Intl#restrictions

import './localization';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxButtonModule, DxDateBoxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
