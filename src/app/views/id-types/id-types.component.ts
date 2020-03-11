import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IdTypes} from '../../_models/id-types';
import {IdTypesService} from '../../_services/id-type.service';

@Component({
    selector: 'app-id-types',
    templateUrl: './id-types.component.html',
    styleUrls: ['./id-types.component.css']
})
export class IdTypesComponent implements OnInit {

    idTypes: IdTypes[] = [];

    constructor(
        private router: Router,
        private idTypesService: IdTypesService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-id-type']).then();
    }

    findAll() {
        this.idTypesService.findAll().subscribe((idTypesFromBackEnd: IdTypes[]) => {
            this.idTypes = idTypesFromBackEnd;
        });
    }
}
