import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {District} from '../_models/district';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DistrictService {

    districts: District[] = [];
    // baseUrl = environment.apiUrl + 'districts';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<District[]> {
        // return this.httpClient.get<District[]>(this.baseUrl).pipe(
        //     map(districts => {
        //         return districts;
        //     })
        // );
        return of(this.districts);
    }

    save(district: District): Observable<District> {
        // return this.httpClient.post<District>(this.baseUrl, district);
        this.districts.push(district);
        return of(district);
    }
}
