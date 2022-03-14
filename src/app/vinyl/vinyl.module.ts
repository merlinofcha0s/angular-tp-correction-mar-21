import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleVinylComponent } from './single-vinyl/single-vinyl.component';
import {SharedModule} from "../shared/shared.module";
import { ListVinylComponent } from './list-vinyl/list-vinyl.component';
import { EditVinylComponent } from './edit-vinyl/edit-vinyl.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SingleVinylComponent,
    ListVinylComponent,
    EditVinylComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class VinylModule { }
