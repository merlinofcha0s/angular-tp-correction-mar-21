import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SingleUserComponent
  ]
})
export class UserModule { }
