import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {VinylModule} from "./vinyl/vinyl.module";
import {UserModule} from "./user/user.module";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    VinylModule,
    UserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
