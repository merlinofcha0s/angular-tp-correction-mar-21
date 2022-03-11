import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from './single-user/single-user.component';



@NgModule({
  declarations: [
    SingleUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleUserComponent
  ]
})
export class UserModule { }
