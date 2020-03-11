import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AddressType} from '../../_models/address-type';
import {AddressTypeService} from '../../_services/address-type.service';


@Component({
    selector: 'app-address-types',
    templateUrl: './address-types.component.html',
    styleUrls: ['./address-types.component.css']
})
export class AddressTypesComponent implements OnInit {

    addresstypes: AddressType[] = [];

    constructor(
        private router: Router,
        private addresstypeService: AddressTypeService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-address-type']).then();
    }

    findAll() {
        this.addresstypeService.findAll().subscribe((addresstypesFromBackEnd: AddressType[]) => {
            this.addresstypes = addresstypesFromBackEnd;
        });
    }
}
