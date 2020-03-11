import {Component, OnInit} from '@angular/core';
import {District} from '../../_models/district';
import {DistrictService} from '../../_services/district.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-districts',
    templateUrl: './districts.component.html',
    styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {

  districts: District[] = [];

    constructor(
        private router: Router,
        private districtService: DistrictService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-district']).then();
    }

    findAll() {
        this.districtService.findAll().subscribe((districtsFromBackEnd: District[]) => {
            this.districts = districtsFromBackEnd;
        });
    }
}
