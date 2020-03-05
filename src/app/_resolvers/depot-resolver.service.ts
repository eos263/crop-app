import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Depot} from '../_models/depot';
import {DepotService} from '../_services/depot.service';

@Injectable()
export class DepotResolver  implements Resolve<Depot[]> {

    constructor(
        private _router: Router,
        private depotService: DepotService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Depot[]> {
        return this.depotService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
