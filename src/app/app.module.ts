import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import {AppComponent} from './app.component';

import {DefaultLayoutComponent} from './containers';

const APP_CONTAINERS = [
    DefaultLayoutComponent
];

import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';

import { AppRoutingModule} from './app.routing';
// import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
// import { TabsModule} from 'ngx-bootstrap/tabs';
import { HttpClientModule} from '@angular/common/http';
// import { BsDatepickerModule, ModalModule} from 'ngx-bootstrap';
import { LoadingDataSpinnerModule} from './_shared/loading-data-spinner/loading-data-spinner.module';
import { MatPaginatorModule} from '@angular/material/paginator';
import {ProvinceResolver} from './_resolvers/province-resolver.service';
import {BuyerResolver} from './_resolvers/buyer-resolver.service';
import {ProvincesModule} from './_views/provinces/provinces.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountriesModule} from './_views/countries/countries.module';
import { CountryResolver } from './_resolvers/country-resolver.service';
import { CropGradesComponent } from './_views/cropGrades/create-crop-grade/crop-grades.component';
import { CropResolver } from './_resolvers/crop-resolver.service';
import { CropGradeResolver } from './_resolvers/crop-grade-resolver.service';
import { DistrictResolver } from './_resolvers/district-resolver.service';
import { WardResolver } from './_resolvers/ward-resolver.service';
import { TownResolver } from './_resolvers/town-resolver.service';
import { OccupationResolver } from './_resolvers/occupation-resolver.service';
import { CropVarietyResolver } from './_resolvers/crop-variety-resolver.service';
import { DistrictsModule } from './_views/districts/districts.module';
import { TownsModule } from './_views/towns/towns.module';
import { OccupationsModule } from './_views/occupations/occupations.module';
import { WardsModule } from './_views/wards/wards.module';
import { CropGradesModule } from './_views/cropGrades/create-crop-grade/crop-grades.module';
import { CropVarietiesModule } from './_views/cropVarieties/create-crop-variety/crop-variety.module';
import { AddressTypesModule } from './_views/addressTypes/address-types.module';
import { IdTypesModule } from './_views/idTypes/id-types.module';
import { IdTypeResolver } from './_resolvers/id-type-resolver.service';
import { AddressTypeResolver } from './_resolvers/address-type-resolver.service';
import { CropsModule } from './_views/crops/crops.module';
import { BuyersModule } from './_views/buyers/buyers.module';
import { VendorsModule } from './_views/vendors/vendors.module';
import { VendorResolver } from './_resolvers/vendor-resolver.service';

// import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppAsideModule,
        // BsDatepickerModule.forRoot(),
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        HttpClientModule,
        MatPaginatorModule,
        PerfectScrollbarModule,
        LoadingDataSpinnerModule,
        ProvincesModule,
        BuyersModule,
        VendorsModule,
        CountriesModule,
        CropsModule,
        DistrictsModule,
        TownsModule,
        OccupationsModule,
        WardsModule,
        CropGradesModule,
        CropVarietiesModule,
        AddressTypesModule,
        IdTypesModule,
        
        // ModalModule.forRoot(),
        // BsDropdownModule.forRoot(),
        // TabsModule.forRoot(),
        // PaginationModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,

    
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        ProvinceResolver,
        BuyerResolver, 
        VendorResolver,
        CountryResolver,
        CropResolver,
        CropGradeResolver,
        DistrictResolver,
        WardResolver,
        TownResolver,
        OccupationResolver,
        CropVarietyResolver,
        AddressTypeResolver,
        IdTypeResolver
    ],
    entryComponents: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
