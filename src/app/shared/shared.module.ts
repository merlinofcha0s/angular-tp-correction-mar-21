import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingButtonsComponent } from './counting-buttons/counting-buttons.component';



@NgModule({
  declarations: [
    CountingButtonsComponent
  ],
  exports: [
    CountingButtonsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
