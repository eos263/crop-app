import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Country} from '../../../_models/country';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

  countryForm: FormGroup;
  countries: Country[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createCountryForm();
  }

  createCountryForm() {
    this.countryForm = this.formBuilder.group({
      name: ['']
    });
  }

  submit() {
    const country: Country = new Country();
    country.name = this.countryForm.value.name;
    this.countries.push(country);

    console.log(this.countries);
  }

}
