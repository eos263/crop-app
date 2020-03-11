import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Depot} from '../_models/depot';

@Injectable({ providedIn: 'root' })
export class DepotService {

  depots: Depot[] = [
        {id: 235253, name: 'wtweqt', districtId: 2}
    ];
    // baseUrl = environment.apiUrl + 'depots';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Depot[]> {
        // return this.httpClient.get<Depot[]>(this.baseUrl).pipe(
        //     map(depots => {
        //         return depots;
        //     })
        // );
        return of(this.depots);
    }

    save(depot: Depot): Observable<Depot> {
        // return this.httpClient.post<Depot>(this.baseUrl, depot);
        this.depots.push(depot);
        return of(depot);
    }
}
