import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Province} from '../../../_models/province';

@Component({
  selector: 'app-create-province',
  templateUrl: './create-province.component.html',
  styleUrls: ['./create-province.component.css']
})
export class CreateProvinceComponent implements OnInit {

  provinceForm: FormGroup;
  provinces: Province[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createProvinceForm();
  }

  createProvinceForm() {
    this.provinceForm = this.formBuilder.group({
      name: [''],
      countryId: [''],
    });
  }

  submit() {
    const province: Province = new Province();
    province.name = this.provinceForm.value.name;
    province.countryId = this.provinceForm.value.countryId;
    this.provinces.push(province);

    console.log(this.provinces);
  }
}
