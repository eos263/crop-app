import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WardsRoutingModule} from './wards-routing.module';
import {CreateWardComponent} from './create-ward/create-ward.component';
import {WardsComponent} from './wards.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        WardsComponent,
        CreateWardComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        WardsRoutingModule
    ]
})
export class WardsModule {
}
