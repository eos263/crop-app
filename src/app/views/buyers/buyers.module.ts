import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BuyersRoutingModule} from './buyers-routing.module';
import {CreateBuyerComponent} from './create-buyer/create-buyer.component';
import {BuyersComponent} from './buyers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        BuyersComponent,
        CreateBuyerComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        BuyersRoutingModule
    ]
})
export class BuyersModule {
}
