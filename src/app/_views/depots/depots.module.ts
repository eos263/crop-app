import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DepotsRoutingModule} from './depots-routing.module';
import {CreateDepotComponent} from './create-depot/create-depot.component';
import {DepotsComponent} from './depots.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        DepotsComponent,
        CreateDepotComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        DepotsRoutingModule
    ]
})
export class DepotsModule {
}
