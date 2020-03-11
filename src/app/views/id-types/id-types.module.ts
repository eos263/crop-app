import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IdTypesComponent} from './id-types.component';
import { IdTypesRoutingModule } from './id-types-routing.module';
import { CreateIdTypeComponent } from './create-id-type/create-id-type.component';


@NgModule({
    declarations: [
      IdTypesComponent,
        CreateIdTypeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        IdTypesRoutingModule
    ]
})
export class IdTypesModule {
}
