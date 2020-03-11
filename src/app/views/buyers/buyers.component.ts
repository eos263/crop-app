import {Component, OnInit} from '@angular/core';
import {Buyer} from '../../_models/buyer';
import {BuyerService} from '../../_services/buyer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-buyers',
    templateUrl: './buyers.component.html',
    styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {

  buyers: Buyer[] = [];

    constructor(
        private router: Router,
        private buyerService: BuyerService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-buyer']).then();
    }

    findAll() {
        this.buyerService.findAll().subscribe((buyersFromBackEnd: Buyer[]) => {
            this.buyers = buyersFromBackEnd;
        });
    }
}
