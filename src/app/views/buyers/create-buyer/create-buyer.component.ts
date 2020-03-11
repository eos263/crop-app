import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Buyer} from '../../../_models/buyer';

@Component({
  selector: 'app-create-buyer',
  templateUrl: './create-buyer.component.html',
  styleUrls: ['./create-buyer.component.css']
})
export class CreateBuyerComponent implements OnInit {

  buyerForm: FormGroup;
  buyers: Buyer[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createBuyerForm();
  }

  createBuyerForm() {
    this.buyerForm = this.formBuilder.group({
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
    const buyer: Buyer = new Buyer();
    buyer.buyerName = this.buyerForm.value.buyerName;
    buyer.TelNo = this.buyerForm.value.TelNo;
    buyer.incorpRegNo = this.buyerForm.value.incorpRegNo;
    buyer.Email = this.buyerForm.value.Email;
    buyer.contactPersonName = this.buyerForm.value.contactPersonName;
    buyer.accNo = this.buyerForm.value.accNo;
    buyer.idNo = this.buyerForm.value.idNo;
    buyer.physicalAddress = this.buyerForm.value.physicalAddress;
    buyer.bankName = this.buyerForm.value.bankName;
    buyer.idType = this.buyerForm.value.idType;
    buyer.addressProofType = this.buyerForm.value.addressProofType;
    this.buyers.push(buyer);

    console.log(this.buyers);
  }
}
