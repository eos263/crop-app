import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Town} from '../_models/town';
import {TownService} from '../_services/town.service';

@Injectable()
export class TownResolver  implements Resolve<Town[]> {

    constructor(
        private _router: Router,
        private townService: TownService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Town[]> {
        return this.townService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
