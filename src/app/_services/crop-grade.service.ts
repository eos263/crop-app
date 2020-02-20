import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {CropGrade} from '../_models/crop-grade';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CropGradeService {

    cropGrades: CropGrade[] = [
        {id: 235253, name:'wtweqt', price: 600, cropVarietyId: 2, cropId:5}
    ];
    // baseUrl = environment.apiUrl + 'cropGrades';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<CropGrade[]> {
        // return this.httpClient.get<Province[]>(this.baseUrl).pipe(
        //     map(provinces => {
        //         return provinces;
        //     })
        // );
        return of(this.cropGrades);
    }

    save(cropgrade: CropGrade): Observable<CropGrade> {
        // return this.httpClient.post<CropGrade>(this.baseUrl, cropgrade);
        this.cropGrades.push(cropgrade);
        return of(cropgrade);
    }
}
