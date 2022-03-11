import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVinylComponent } from './single-vinyl/single-vinyl.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    SingleVinylComponent
  ],
  exports: [
    SingleVinylComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class VinylModule { }
