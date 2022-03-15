import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';
import {HttpClientModule} from "@angular/common/http";
import { ListUserComponent } from './list-user/list-user.component';
import {RouterModule} from "@angular/router";
import { EditUserComponent } from './edit-user/edit-user.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SingleUserComponent,
    ListUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
