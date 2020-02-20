import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CropGradesRoutingModule} from './crop-grades-routing.module';
import {CreateCropGradesComponent} from './create-crop-grade/create-crop-grade.component';
import {CropGradesComponent} from './crop-grades.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        CropGradesComponent,
        CreateCropGradesComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        CropGradesRoutingModule
    ]
})
export class ProvincesModule {
}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { CropGradesRoutingModule } from './crop-grades-routing.module';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     CropGradesRoutingModule
//   ]
// })
// export class CropGradesModule { }
