import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { IdTypes } from 'src/app/_models/id-types';
import { IdTypesService } from 'src/app/_services/id-type.service';

@Component({
    selector: 'app-id-types',
    templateUrl: './id-types.component.html',
    styleUrls: ['./id-types.component.css']
})
export class IdTypesComponent implements OnInit {

    idtypes: IdTypes[] = [];

    constructor(
        private router: Router,
        private idtypeService: IdTypesService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-id-type']).then();
    }

    findAll() {
        this.idtypeService.findAll().subscribe((idtypesFromBackEnd: IdTypes[]) => {
            this.idtypes = idtypesFromBackEnd;
        });
    }
}
