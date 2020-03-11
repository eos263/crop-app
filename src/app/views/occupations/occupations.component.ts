import {Component, OnInit} from '@angular/core';
import {Occupation} from '../../_models/occupation';
import {OccupationService} from '../../_services/occupation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-occupations',
    templateUrl: './occupations.component.html',
    styleUrls: ['./occupations.component.css']
})
export class OccupationsComponent implements OnInit {

    occupations: Occupation[] = [];

    constructor(
        private router: Router,
        private occupationService: OccupationService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-occupation']).then();
    }

    findAll() {
        this.occupationService.findAll().subscribe((occupationsFromBackEnd: Occupation[]) => {
            this.occupations = occupationsFromBackEnd;
        });
    }
}
