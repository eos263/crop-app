import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DefaultLayoutComponent} from './containers';
import {ProvincesComponent} from './_views/provinces/provinces.component';
import {CountriesComponent} from './_views/countries/countries.component';
import { CropVarietyComponent } from './_views/cropVarieties/create-crop-variety/crop-variety.component';
import { DistrictsComponent } from './_views/districts/districts.component';
import { WardsComponent } from './_views/wards/wards.component';
import { TownsComponent } from './_views/towns/towns.component';
import { CropGradesComponent } from './_views/cropGrades/create-crop-grade/crop-grades.component';
import { OccupationsComponent } from './_views/occupations/occupations.component';
import { AddressTypesComponent } from './_views/addressTypes/address-types.component';
import {BuyersComponent} from './_views/buyers/buyers.component';
import { DepotsComponent } from './_views/depots/depots.component';
import {VendorsComponent} from './_views/vendors/vendors.component';


import {ProvinceResolver} from './_resolvers/province-resolver.service';
import { CountryResolver } from './_resolvers/country-resolver.service';
import { VendorResolver } from './_resolvers/vendor-resolver.service';
import { BuyerResolver } from './_resolvers/buyer-resolver.service';
import { CropResolver } from './_resolvers/crop-resolver.service';
import { CropGradeResolver } from './_resolvers/crop-grade-resolver.service';
import { OccupationResolver } from './_resolvers/occupation-resolver.service';
import { DistrictResolver } from './_resolvers/district-resolver.service';
import { WardResolver } from './_resolvers/ward-resolver.service';
import { TownResolver } from './_resolvers/town-resolver.service';
import { CropVarietyResolver } from './_resolvers/crop-variety-resolver.service';
import { DepotResolver } from './_resolvers/depot-resolver.service';
import { IdTypeResolver } from './_resolvers/id-type-resolver.service';
import { AddressTypeResolver } from './_resolvers/address-type-resolver.service';


import { CreateCropComponent } from './_views/crops/create-crop/create-crop.component';
import {CreateProvinceComponent} from './_views/provinces/create-province/create-province.component';
import {CreateBuyerComponent} from './_views/buyers/create-buyer/create-buyer.component';
import {CreateCountryComponent} from './_views/countries/create-country/create-country.component';
import { CreateCropGradeComponent } from './_views/cropGrades/create-crop-grade/create-crop-grade.component';
import { CreateCropVarietyComponent } from './_views/cropVarieties/create-crop-variety/create-crop-variety.component';
import { CreateTownComponent } from './_views/towns/create-town/create-town.component';
import { CreateOccupationComponent } from './_views/occupations/create-occupation/create-occupation.component';
import { CreateDistrictComponent } from './_views/districts/create-district/create-district.component';
import { CreateWardComponent } from './_views/wards/create-ward/create-ward.component';
import { CreateAddressTypeComponent } from './_views/addressTypes/create-address-type/create-address-type.component';
import { IdTypesComponent } from './_views/idTypes/id-types.component';
import { CreateIdTypeComponent } from './_views/idTypes/create-id-type/create-id-type.component';
import { CropsComponent } from './_views/crops/crops.component';
import { CreateVendorComponent } from './_views/vendors/create-vendor/create-vendor.component';
import { CreateDepotComponent } from './_views/depots/create-depot/create-depot.component';



export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: { title: 'Home' },
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            { path: 'provinces', component: ProvincesComponent, resolve: { provincesData: ProvinceResolver }},
            { path: 'buyers', component: BuyersComponent, resolve: { provincesData: BuyerResolver }},
            { path: 'depots', component: DepotsComponent, resolve: { provincesData: DepotResolver }},
            { path: 'vendors', component: VendorsComponent, resolve: { provincesData: VendorResolver }},
            { path: 'countries', component: CountriesComponent, resolve: { countriesData: CountryResolver }},
            { path: 'crops', component: CropsComponent, resolve: { cropsData: CropResolver }},
            { path: 'occupations', component: OccupationsComponent, resolve: { occupationsData: OccupationResolver }},
            { path: 'districts', component: DistrictsComponent, resolve: { districtsData: DistrictResolver }},
            { path: 'wards', component: WardsComponent, resolve: { wardsData: WardResolver }},
            { path: 'towns', component: TownsComponent, resolve: { townsData: TownResolver }},
            { path: 'cropgrades', component: CropGradesComponent, resolve: { cropGradeData: CropGradeResolver }},
            { path: 'cropvarieties', component: CropVarietyComponent, resolve: { cropVarietyData: CropVarietyResolver }},
            { path: 'addresstypes', component: AddressTypesComponent, resolve: { addressTypeData: AddressTypeResolver }},
            { path: 'idtypes', component: IdTypesComponent, resolve: { idTypeData: IdTypeResolver }},
            { path: 'create-province', component: CreateProvinceComponent },
            { path: 'create-crop', component: CreateCropComponent },
            { path: 'create-country', component: CreateCountryComponent },
            { path: 'create-crop-grade', component: CreateCropGradeComponent },
            { path: 'create-crop-variety', component: CreateCropVarietyComponent },
            { path: 'create-id-type', component: CreateIdTypeComponent },
            { path: 'create-address-type', component: CreateAddressTypeComponent },
            { path: 'create-town', component: CreateTownComponent },
            { path: 'create-occupation', component: CreateOccupationComponent },
            { path: 'create-district', component: CreateDistrictComponent },
            { path: 'create-ward', component: CreateWardComponent },
            { path: 'create-buyer', component: CreateBuyerComponent },
            { path: 'create-vendor', component: CreateVendorComponent },
            { path: 'create-depot', component: CreateDepotComponent },
        
        
        
           

            // {
            //     path: 'batch-details/:clientBatchReference',
            //     component: BatchDetailsComponent,
            //     resolve: { batchData: LoadBatchByClientBatchReferenceResolverService }
            // },
            // { path: 'transactions', component: TransactionsComponent, resolve: { transactionsData: LoadTransactionsResolverService } },
            // {
            //     path: 'settings',
            //     loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
            // },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
