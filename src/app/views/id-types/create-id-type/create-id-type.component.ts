import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IdTypes} from '../../../_models/id-types';

@Component({
    selector: 'app-create-id-type',
    templateUrl: './create-id-type.component.html',
    styleUrls: ['./create-id-type.component.css']
})
export class CreateIdTypeComponent implements OnInit {

    idTypeForm: FormGroup;
    idtypes: IdTypes[] = [];

    constructor(private fromBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createIdTypeForm();
    }

    createIdTypeForm() {
        this.idTypeForm = this.fromBuilder.group({
            natIdNo: [''],
            passportNo: ['']
        });
    }

    submit() {
        const idTypes: IdTypes = new IdTypes();
        idTypes.name = this.idTypeForm.value.natIdNo;
        idTypes.id = this.idTypeForm.value.passportNo;
        this.idtypes.push(idTypes);

        console.log(this.idtypes);

    }

}
