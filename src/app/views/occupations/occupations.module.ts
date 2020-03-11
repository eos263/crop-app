import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OccupationsRoutingModule} from './occupations-routing.module';
import {CreateOccupationComponent} from './create-occupation/create-occupation.component';
import {OccupationsComponent} from './occupations.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        OccupationsComponent,
        CreateOccupationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        OccupationsRoutingModule
    ]
})
export class OccupationsModule {
}

