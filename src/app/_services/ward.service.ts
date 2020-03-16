import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Ward} from '../_models/ward';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WardService {

  wards: Ward[] = [];
    // baseUrl = environment.apiUrl + 'wards';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Ward[]> {
        // return this.httpClient.get<Ward[]>(this.baseUrl).pipe(
        //     map(wards => {
        //         return wards;
        //     })
        // );
        return of(this.wards);
    }

    save(ward: Ward): Observable<Ward> {
        // return this.httpClient.post<Ward>(this.baseUrl, ward);
        this.wards.push(ward);
        return of(ward);
    }
}
