import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';
import {HttpClientModule} from "@angular/common/http";
import { ListUserComponent } from './list-user/list-user.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SingleUserComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    ListUserComponent,
    SingleUserComponent,

  ]
})
export class UserModule { }
