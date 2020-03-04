import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Vendor} from '../../../_models/vendor';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {

  vendorForm: FormGroup;
  vendors: Vendor[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createVendorForm();
  }

  createVendorForm() {
    this.vendorForm = this.formBuilder.group({
    orgName:[''],
    orgTelNo:[''],
    incorpRegNo:[''],
    orgEmail:[''],
    contactPersonName:[''],
    accNo:[''],
    idNo:[''],
    physicalAddress:[''],
    bankName:[''],
    idType:[''],
    addressProofType:[''],
    });
  }

  submit() {
    const vendor: Vendor = new Vendor();
    vendor.orgName = this.vendorForm.value.orgName;
    vendor.orgTelNo = this.vendorForm.value.orgTelNo;
    vendor.incorpRegNo = this.vendorForm.value.incorpRegNo;
    vendor.orgEmail = this.vendorForm.value.orgEmail;
    vendor.contactPersonName = this.vendorForm.value.contactPersonName;
    vendor.accNo = this.vendorForm.value.accNo;
    vendor.idNo = this.vendorForm.value.idNo;
    vendor.physicalAddress = this.vendorForm.value.physicalAddress;
    vendor.bankName = this.vendorForm.value.bankName;
    vendor.idType = this.vendorForm.value.idType;
    vendor.addressProofType = this.vendorForm.value.addressProofType;
    this.vendors.push(vendor);

    console.log(this.vendors);
  }
}
