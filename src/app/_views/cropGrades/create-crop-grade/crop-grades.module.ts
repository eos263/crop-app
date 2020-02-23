import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CropGradesComponent} from './crop-grades.component';
import { CropGradesRoutingModule } from './crop-grades-routing.module';
import { CreateCropGradeComponent } from './create-crop-grade.component';

@NgModule({
    declarations: [
        CropGradesComponent,
        CreateCropGradeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        CropGradesRoutingModule
    ]
})
export class CropGradesModule {
}
