import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TownsRoutingModule} from './towns-routing.module';
import {CreateTownComponent} from './create-town/create-town.component';
import {TownsComponent} from './towns.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        TownsComponent,
        CreateTownComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        TownsRoutingModule
    ]
})
export class TownsModule {
}
