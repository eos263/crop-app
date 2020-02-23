import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AddressType} from '../_models/address-type';
import {AddressTypeService} from '../_services/address-type.service';

@Injectable()
export class AddressTypeResolver  implements Resolve<AddressType[]> {

    constructor(
        private _router: Router,
        private addresstypeService: AddressTypeService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<AddressType[]> {
        return this.addresstypeService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
