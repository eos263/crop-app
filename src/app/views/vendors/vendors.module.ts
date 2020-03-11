import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VendorsRoutingModule} from './vendors-routing.module';
import {CreateVendorComponent} from './create-vendor/create-vendor.component';
import {VendorsComponent} from './vendors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        VendorsComponent,
        CreateVendorComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        VendorsRoutingModule
    ]
})
export class VendorsModule {
}
