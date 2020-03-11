import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Depot} from '../../../_models/depot';

@Component({
  selector: 'app-create-depot',
  templateUrl: './create-depot.component.html',
  styleUrls: ['./create-depot.component.css']
})
export class CreateDepotComponent implements OnInit {

  depotForm: FormGroup;
  depots: Depot[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createDepotForm();
  }

  createDepotForm() {
    this.depotForm = this.formBuilder.group({
      name: [''],
      districtId: [''],
    });
  }

  submit() {
    const depot: Depot = new Depot();
    depot.name = this.depotForm.value.name;
    depot.districtId = this.depotForm.value.districtId;
    this.depots.push(depot);

    console.log(this.depots);
  }
}
