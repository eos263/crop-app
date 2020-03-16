import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CropService} from '../_services/crop.service';
import {Crop} from '../_models/crop';


@Injectable()
export class CropResolver implements Resolve<Crop[]> {

  constructor(
    private _router: Router,
    private cropService: CropService
  ) { }

  resolve(ActivatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Crop[]> {
    return this.cropService.findAll().pipe(
      catchError(() => {
        return throwError('Error while trying to retrieve Transactions');
        })
      );
  }
}
