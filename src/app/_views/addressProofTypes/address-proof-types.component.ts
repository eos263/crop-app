import { Component, OnInit } from '@angular/core';
import {AddressProofType} from '../../_models/address-proof-type';
import {AddressProofTypeService} from '../../_services/address-proof-type.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-address-proof-types',
  templateUrl: './address-proof-types.component.html',
  styleUrls: ['./address-proof-types.component.css']
})
export class AddressProofTypesComponent implements OnInit {

  addressprooftypes: AddressProofType[] = [];
  
  constructor( 
    private router: Router,
    private addressprooftypeService: AddressProofTypeService
    ){ }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-address-proof-type']).then();
    }

    findAll() {
        this.addressprooftypeService.findAll().subscribe((addressprooftypesFromBackEnd: AddressProofType[]) => {
            this.addressprooftypes = addressprooftypesFromBackEnd;
        });
    }
}
