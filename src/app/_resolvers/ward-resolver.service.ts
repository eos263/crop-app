import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Ward} from '../_models/ward';
import {WardService} from '../_services/ward.service';

@Injectable()
export class WardResolver  implements Resolve<Ward[]> {

    constructor(
        private _router: Router,
        private wardService: WardService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Ward[]> {
        return this.wardService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
