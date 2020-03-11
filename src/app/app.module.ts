import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

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
import {ProvincesModule} from './views/provinces/provinces.module';
import {CreateProvinceComponent} from './views/provinces/create-province/create-province.component';
import {ProvincesComponent} from './views/provinces/provinces.component';
import {CreateCountryComponent} from './views/countries/create-country/create-country.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountriesModule} from './views/countries/countries.module';
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
        CountriesModule,
        // ModalModule.forRoot(),
        // BsDropdownModule.forRoot(),
        // TabsModule.forRoot(),
        // PaginationModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        ProvinceResolver
    ],
    entryComponents: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
