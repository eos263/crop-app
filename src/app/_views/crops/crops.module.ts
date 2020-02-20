import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BrowserModule} from '@angular/platform-browser';
import {CropsRoutingModule} from './crops-routing.module';
import {CropsComponent} from './crops.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        CropsComponent,
    
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        CropsRoutingModule
    ]
})
export class CropsModule {
}
