import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DistrictsRoutingModule} from './districts-routing.module';
import {CreateDistrictComponent} from './create-district/create-district.component';
import {DistrictsComponent} from './districts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
      DistrictsComponent,
        CreateDistrictComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        DistrictsRoutingModule
    ]
})
export class DistrictsModule {
}
