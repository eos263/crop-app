import {Component, OnInit} from '@angular/core';
import {Depot} from '../../_models/depot';
import {DepotService} from '../../_services/depot.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-depots',
    templateUrl: './depots.component.html',
    styleUrls: ['./depots.component.css']
})
export class DepotsComponent implements OnInit {

  depots: Depot[] = [];

    constructor(
        private router: Router,
        private depotService: DepotService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-depot']).then();
    }

    findAll() {
        this.depotService.findAll().subscribe((depotsFromBackEnd: Depot[]) => {
            this.depots = depotsFromBackEnd;
        });
    }
}
