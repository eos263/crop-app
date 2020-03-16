import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {AddressProofType} from '../_models/address-proof-type';
import {AddressProofTypeService} from '../_services/address-proof-type.service';

@Injectable()

export class AddressProofTypeResolverService implements Resolve<AddressProofType[]> {

  constructor(
    private _router: Router,
    private addressProofTypeService: AddressProofTypeService
) { }

resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<AddressProofType[]> {
    return this.addressProofTypeService.findAll().pipe(
        catchError(() => {
            return throwError('Error while trying to retrieve Transactions');
        })
    );
}
}
