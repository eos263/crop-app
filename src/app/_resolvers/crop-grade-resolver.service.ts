import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CropGradeService} from '../_services/crop-grade.service';
import { CropGrade } from '../_models/crop-grade';


@Injectable()
export class CropGradeResolver implements Resolve<CropGrade[]> {

  constructor(
    private cropGradeService: CropGradeService
  ) { }

  resolve(ActivatedRouteSnapshot: ActivatedRouteSnapshot): Observable<CropGrade[]> {
    return this.cropGradeService.findAll().pipe(
      catchError(() => {
        return throwError('Error while trying to retrieve Transactions');
        })
      );
  }
}
