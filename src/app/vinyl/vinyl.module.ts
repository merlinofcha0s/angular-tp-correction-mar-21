import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVinylComponent } from './single-vinyl/single-vinyl.component';



@NgModule({
  declarations: [
    SingleVinylComponent
  ],
  exports: [
    SingleVinylComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VinylModule { }
