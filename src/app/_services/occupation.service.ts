import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Occupation} from '../_models/occupation';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OccupationService {

    occupations: Occupation[] = [];
    // baseUrl = environment.apiUrl + 'occupations';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Occupation[]> {
        // return this.httpClient.get<Occupation[]>(this.baseUrl).pipe(
        //     map(occupations => {
        //         return occupations;
        //     })
        // );
        return of(this.occupations);
    }

    save(occupation: Occupation): Observable<Occupation> {
        // return this.httpClient.post<Occupation>(this.baseUrl, occupation);
        this.occupations.push(occupation);
        return of(occupation);
    }
}
