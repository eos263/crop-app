import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CropGrade} from '../_models/crop-grade';
import {CropGradeService} from '../_services/crop-grade.service';

@Injectable()
export class CropGradeResolver  implements Resolve<CropGrade[]> {

    constructor(
        private _router: Router,
        private cropgradeService: CropGradeService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<CropGrade[]> {
        return this.cropgradeService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
