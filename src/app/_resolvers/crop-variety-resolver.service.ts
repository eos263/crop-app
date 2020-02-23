import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CropVariety} from '../_models/crop-variety';
import { CropVarietyService } from '../_services/crop-variety.service';

@Injectable()
export class CropVarietyResolver  implements Resolve<CropVariety[]> {

    constructor(
        private _router: Router,
        private cropvarietyService: CropVarietyService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<CropVariety[]> {
        return this.cropvarietyService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
