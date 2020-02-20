import {Component, OnInit} from '@angular/core';
import {CropGrade} from '../../_models/crop-grade';
import {CropGradeService} from '../../_services/crop-grade.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-cropGrades',
    templateUrl: './cropGrades.component.html',
    styleUrls: ['./cropGrades.component.css']
})
export class ProvincesComponent implements OnInit {

    cropGrades: CropGrade[] = [];

    constructor(
        private router: Router,
        private cropGradeService: CropGradeService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-crop-grade']).then();
    }

    findAll() {
        this.cropGradeService.findAll().subscribe((cropGradesFromBackEnd: CropGrade[]) => {
            this.cropGrades = cropGradesFromBackEnd;
        });
    }
}
