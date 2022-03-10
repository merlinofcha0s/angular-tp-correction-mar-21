import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {VinylModule} from "./vinyl/vinyl.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VinylModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
