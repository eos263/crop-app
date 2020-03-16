import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DefaultLayoutComponent} from './containers';
import {ProvincesComponent} from './views/provinces/provinces.component';
import {ProvinceResolver} from './_resolvers/province-resolver.service';
import {CreateProvinceComponent} from './views/provinces/create-province/create-province.component';
import {CreateCountryComponent} from './views/countries/create-country/create-country.component';
import {CountriesComponent} from './views/countries/countries.component';
import {VendorsComponent} from './views/vendors/vendors.component';
import {DepotsComponent} from './views/depots/depots.component';
import {BuyersComponent} from './views/buyers/buyers.component';
import {CropsComponent} from './views/crops/crops.component';
import {OccupationsComponent} from './views/occupations/occupations.component';
import {DistrictsComponent} from './views/districts/districts.component';
import {WardsComponent} from './views/wards/wards.component';
import {TownsComponent} from './views/towns/towns.component';
import {CropGradesComponent} from './views/crop-grades/create-crop-grade/crop-grades.component';
import {CropVarietyComponent} from './views/crop-varieties/create-crop-variety/crop-variety.component';
import {AddressTypesComponent} from './views/address-types/address-types.component';
import {IdTypesComponent} from './views/id-types/id-types.component';
import {CreateCropComponent} from './views/crops/create-crop/create-crop.component';
import {CreateCropGradeComponent} from './views/crop-grades/create-crop-grade/create-crop-grade.component';
import {CreateCropVarietyComponent} from './views/crop-varieties/create-crop-variety/create-crop-variety.component';
import {CreateIdTypeComponent} from './views/id-types/create-id-type/create-id-type.component';
import {CreateAddressTypeComponent} from './views/address-types/create-address-type/create-address-type.component';
import {CreateTownComponent} from './views/towns/create-town/create-town.component';
import {CreateOccupationComponent} from './views/occupations/create-occupation/create-occupation.component';
import {CreateDistrictComponent} from './views/districts/create-district/create-district.component';
import {CreateWardComponent} from './views/wards/create-ward/create-ward.component';
import {CreateBuyerComponent} from './views/buyers/create-buyer/create-buyer.component';
import {CreateVendorComponent} from './views/vendors/create-vendor/create-vendor.component';
import {CreateDepotComponent} from './views/depots/create-depot/create-depot.component';
import { CreateAddressProofTypeComponent } from './_views/addressProofTypes/create-address-proof-type/create-address-proof-type.component';
import { AddressProofTypesComponent } from './_views/addressProofTypes/address-proof-types.component';

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
            { path: 'provinces', component: ProvincesComponent, resolve: { provincesData: ProvinceResolver } },
            { path: 'create-province', component: CreateProvinceComponent },
            { path: 'create-country', component: CreateCountryComponent },
            { path: 'countries', component: CountriesComponent },
            { path: 'buyers', component: BuyersComponent },
            { path: 'depots', component: DepotsComponent },
            { path: 'vendors', component: VendorsComponent },
            { path: 'countries', component: CountriesComponent },
            { path: 'crops', component: CropsComponent },
            { path: 'occupations', component: OccupationsComponent },
            { path: 'districts', component: DistrictsComponent },
            { path: 'wards', component: WardsComponent },
            { path: 'towns', component: TownsComponent },
            { path: 'crop-grades', component: CropGradesComponent },
            { path: 'crop-varieties', component: CropVarietyComponent },
            { path: 'address-types', component: AddressTypesComponent },
            { path: 'address-proof-types', component: AddressProofTypesComponent },
            { path: 'id-types', component: IdTypesComponent },
            { path: 'create-province', component: CreateProvinceComponent },
            { path: 'create-crop', component: CreateCropComponent },
            { path: 'create-country', component: CreateCountryComponent },
            { path: 'create-crop-grade', component: CreateCropGradeComponent },
            { path: 'create-crop-variety', component: CreateCropVarietyComponent },
            { path: 'create-id-type', component: CreateIdTypeComponent },
            { path: 'create-address-type', component: CreateAddressTypeComponent },
            { path: 'create-address-proof-type', component: CreateAddressProofTypeComponent },
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
