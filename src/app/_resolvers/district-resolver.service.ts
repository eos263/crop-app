import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { District } from '../_models/district';
import { DistrictService } from '../_services/district.service';


@Injectable()
export class DistrictResolver  implements Resolve<District[]> {

    constructor(
        private _router: Router,
        private districtService: DistrictService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<District[]> {
        return this.districtService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
