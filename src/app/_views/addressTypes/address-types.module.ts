import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddressTypesComponent} from './address-types.component';
import { AddressTypesRoutingModule } from './address-types-routing.module';
import { CreateAddressTypeComponent } from './create-address-type/create-address-type.component';


@NgModule({
    declarations: [
        AddressTypesComponent,
        CreateAddressTypeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AddressTypesRoutingModule
    ]
})
export class AddressTypesModule {
}
