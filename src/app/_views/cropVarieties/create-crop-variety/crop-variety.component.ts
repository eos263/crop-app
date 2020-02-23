import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CropVariety } from 'src/app/_models/crop-variety';
import { CropVarietyService } from 'src/app/_services/crop-variety.service';

@Component({
    selector: 'app-crop-variety',
    templateUrl: './crop-variety.component.html',
    styleUrls: ['./crop-variety.component.css']
})
export class CropVarietyComponent implements OnInit {

    cropvarieties: CropVariety[] = [];

    constructor(
        private router: Router,
        private cropvarietyService: CropVarietyService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-crop-variety']).then();
    }

    findAll() {
        this.cropvarietyService.findAll().subscribe((cropvarietiesFromBackEnd: CropVariety[]) => {
            this.cropvarieties = cropvarietiesFromBackEnd;
        });
    }
}
