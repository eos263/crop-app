import {Component, OnInit} from '@angular/core';
import {Town} from '../../_models/town';
import {TownService} from '../../_services/town.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-towns',
    templateUrl: './towns.component.html',
    styleUrls: ['./towns.component.css']
})
export class TownsComponent implements OnInit {

  towns: Town[] = [];

    constructor(
        private router: Router,
        private townService: TownService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-town']).then();
    }

    findAll() {
        this.townService.findAll().subscribe((townsFromBackEnd: Town[]) => {
            this.towns = townsFromBackEnd;
        });
    }
}
