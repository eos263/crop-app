import {Component, OnInit} from '@angular/core';
import {Crop} from '../../_models/crop';
import {CropService} from '../../_services/crop.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-crops',
    templateUrl: './crops.component.html',
    styleUrls: ['./crops.component.scss']
})
export class CropsComponent implements OnInit {

    crops: Crop[] = [];

    constructor(
        private router: Router,
        private cropService: CropService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-crop']).then();
    }

    findAll() {
        this.cropService.findAll().subscribe((cropsFromBackEnd: Crop[]) => {
            this.crops = cropsFromBackEnd;
        });
    }
}
