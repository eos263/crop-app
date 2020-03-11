import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropVarietyRoutingModule } from './crop-variety-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCropVarietyComponent } from './create-crop-variety.component';
import { CropVarietyComponent } from './crop-variety.component';


@NgModule({
  declarations: [
      CropVarietyComponent,
      CreateCropVarietyComponent
  ],
  imports: [
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
      CropVarietyRoutingModule
  ]
})
export class CropVarietiesModule {
}
