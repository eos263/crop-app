import {Component, OnInit} from '@angular/core';
import {Ward} from '../../_models/ward';
import {WardService} from '../../_services/ward.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-wards',
    templateUrl: './wards.component.html',
    styleUrls: ['./wards.component.css']
})
export class WardsComponent implements OnInit {

  wards: Ward[] = [];

    constructor(
        private router: Router,
        private wardService: WardService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-ward']).then();
    }

    findAll() {
        this.wardService.findAll().subscribe((wardsFromBackEnd: Ward[]) => {
            this.wards =wardsFromBackEnd;
        });
    }
}
