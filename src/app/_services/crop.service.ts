import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Crop} from '../_models/crop';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CropService {

    crops: Crop[] = [];
    // baseUrl = environment.apiUrl + 'crop';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Crop[]> {
        // return this.httpClient.get<Crop[]>(this.baseUrl).pipe(
        //     map(crops => {
        //         return crops;
        //     })
        // );
        return of(this.crops);
    }

    save(crop: Crop): Observable<Crop> {
        // return this.httpClient.post<Crop>(this.baseUrl, crop);
        this.crops.push(crop);
        return of(crop);
    }
}
