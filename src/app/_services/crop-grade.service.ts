import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {CropGrade} from '../_models/crop-grade';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CropGradeService {

    cropgrades: CropGrade[] = [];
    // baseUrl = environment.apiUrl + 'cropgrades';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<CropGrade[]> {
        // return this.httpClient.get<CropGrade[]>(this.baseUrl).pipe(
        //     map(cropgrades => {
        //         return cropgrades;
        //     })
        // );
        return of(this.cropgrades);
    }

    save(cropgrade: CropGrade): Observable<CropGrade> {
        // return this.httpClient.post<CropGrade>(this.baseUrl, cropgrade);
        this.cropgrades.push(cropgrade);
        return of(cropgrade);
    }
}
