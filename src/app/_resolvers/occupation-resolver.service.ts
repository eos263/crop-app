import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Occupation} from '../_models/occupation';
import {OccupationService} from '../_services/occupation.service';

@Injectable()
export class OccupationResolver  implements Resolve<Occupation[]> {

    constructor(
        private _router: Router,
        private occupationService: OccupationService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Occupation[]> {
        return this.occupationService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
