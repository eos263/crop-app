import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CropGrade} from '../../../_models/crop-grade';
import {CropGradeService} from '../../../_services/crop-grade.service';

@Component({
    selector: 'app-crop-grades',
    templateUrl: './crop-grades.component.html',
    styleUrls: ['./crop-grades.component.css']
})
export class CropGradesComponent implements OnInit {

    cropgrades: CropGrade[] = [];

    constructor(
        private router: Router,
        private cropgradeService: CropGradeService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-crop-grade']).then();
    }

    findAll() {
        this.cropgradeService.findAll().subscribe((cropgradesFromBackEnd: CropGrade[]) => {
            this.cropgrades = cropgradesFromBackEnd;
        });
    }
}
