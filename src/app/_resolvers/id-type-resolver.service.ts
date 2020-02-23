import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {IdTypes} from '../_models/id-types';
import {IdTypesService} from '../_services/id-type.service';

@Injectable()
export class IdTypeResolver  implements Resolve<IdTypes[]> {

    constructor(
        private _router: Router,
        private idtypesService: IdTypesService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<IdTypes[]> {
        return this.idtypesService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
