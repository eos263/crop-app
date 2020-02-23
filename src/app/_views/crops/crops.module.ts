import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CropsRoutingModule} from './crops-routing.module';
import {CreateCropComponent} from './create-crop/create-crop.component';
import {CropsComponent} from './crops.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        CropsComponent,
        CreateCropComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        CropsRoutingModule
    ]
})
export class CropsModule {
}
