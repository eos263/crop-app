import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressProofTypesRoutingModule } from './address-proof-types-routing.module';
import {CreateAddressProofTypeComponent} from './create-address-proof-type/create-address-proof-type.component';
import {AddressProofTypesComponent} from './address-proof-types.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AddressProofTypesComponent,
    CreateAddressProofTypeComponent
  ],


  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AddressProofTypesRoutingModule
  ]
})
export class AddressProofTypesModule { }
