import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Buyer} from '../_models/buyer';
import {BuyerService} from '../_services/buyer.service';

@Injectable()
export class BuyerResolver  implements Resolve<Buyer[]> {

    constructor(
        private _router: Router,
        private buyerService: BuyerService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Buyer[]> {
        return this.buyerService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
