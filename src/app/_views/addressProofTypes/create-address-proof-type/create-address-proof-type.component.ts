import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddressProofType} from '../../../_models/address-proof-type';
import {AddressProofTypeService} from '../../../_services/address-proof-type.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-address-proof-type',
    templateUrl: './create-address-proof-type.component.html',
    styleUrls: ['./create-address-proof-type.component.css']
})
export class CreateAddressProofTypeComponent implements OnInit {

    addressProofTypeAdded = false;
    addressProofTypeForm: FormGroup;
    addressProofType: AddressProofType = new AddressProofType();

    constructor(
        private route: Router,
        private formBuilder: FormBuilder,
        private addressProofTypeService: AddressProofTypeService
    ) { }

    ngOnInit() {
        this.createAddressProofTypeForm();
    }

    createAddressProofTypeForm() {
        this.addressProofTypeForm = this.formBuilder.group({
            name: [''],
        });
    }

    submit() {

        this.addressProofType = Object.assign({}, this.addressProofTypeForm.value);

        this.addressProofTypeService.save(this.addressProofType).subscribe((addressProofType: AddressProofType) => {
            this.addressProofTypeAdded = true;
            // this.getAddressProofType();
            setTimeout(() => {
                this.addressProofTypeAdded = false;
                this.onBackToList();
            }, 3000);
        }, error => {
            this.addressProofTypeAdded = false;
        });
    }

    onBackToList() {
        this.route.navigate(['/address-proof-types']).then();
    }
}
