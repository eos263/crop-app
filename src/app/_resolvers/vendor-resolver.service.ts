import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Vendor} from '../_models/vendor';
import {VendorService} from '../_services/vendor.service';

@Injectable()
export class VendorResolver  implements Resolve<Vendor[]> {

    constructor(
        private _router: Router,
        private vendorService: VendorService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Vendor[]> {
        return this.vendorService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
