import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProvinceComponent } from './_views/provinces/create-province/create-province.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateWardComponent } from './_views/wards/create-ward/create-ward.component';
import { RouterModule } from '@angular/router';
import { CreateCountryComponent } from './_views/countries/create-country/create-country.component';
import { CreateDistrictComponent } from './_views/districts/create-district/create-district.component';
import { CreateTownComponent } from './_views/towns/create-town/create-town.component';
import { CreateCropComponent } from './_views/crops/create-crop/create-crop.component';
import { CreateCropVarietyComponent } from './_views/cropVarieties/create-crop-variety/create-crop-variety.component';
import { CreateCropGradeComponent } from './_views/cropGrades/create-crop-grade/create-crop-grade.component';
import { CreateAddressTypeComponent } from './_views/addressTypes/create-address-type/create-address-type.component';
import { CreateOccupationComponent } from './_views/occupations/create-occupation/create-occupation.component';
import { CreateIdTypeComponent } from './_views/idTypes/create-id-type/create-id-type.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProvinceComponent,
    CreateWardComponent,
    CreateCountryComponent,
    CreateDistrictComponent,
    CreateTownComponent,
    CreateCropComponent,
    CreateCropVarietyComponent,
    CreateCropGradeComponent,
    CreateAddressTypeComponent,
    CreateOccupationComponent,
    CreateIdTypeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
