import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Town} from '../_models/town';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TownService {

    towns: Town[] = [
        {id: 235253, name:'wtweqt',  provinceId: 2,  countryId: 2,}
    ];
    // baseUrl = environment.apiUrl + 'provinces';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Town[]> {
        // return this.httpClient.get<Town[]>(this.baseUrl).pipe(
        //     map(towns => {
        //         return towns;
        //     })
        // );
        return of(this.towns);
    }

    save(town: Town): Observable<Town> {
        // return this.httpClient.post<Town>(this.baseUrl, town);
        this.towns.push(town);
        return of(town);
    }
}
