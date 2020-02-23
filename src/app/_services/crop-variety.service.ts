import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {CropVariety} from '../_models/crop-variety';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CropVarietyService {

    cropvarieties: CropVariety[] = [
        {id: 235253, name:'wtweqt', cropId: 2}
    ];
    // baseUrl = environment.apiUrl + 'cropvarieties';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<CropVariety[]> {
        // return this.httpClient.get<CropGrade[]>(this.baseUrl).pipe(
        //     map(cropvarieties => {
        //         return cropvarieties;
        //     })
        // );
        return of(this.cropvarieties);
    }

    save(cropvariety: CropVariety): Observable<CropVariety> {
        // return this.httpClient.post<CropVariety>(this.baseUrl, cropvariety);
        this.cropvarieties.push(cropvariety);
        return of(cropvariety);
    }
}
