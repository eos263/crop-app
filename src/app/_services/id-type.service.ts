import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {IdTypes} from '../_models/id-types';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class IdTypesService {

    idtypes: IdTypes[] = [
        {id: 20, natIdNo:'05-117945 A 05', passportNo: 'BN886074'}
    ];
    // baseUrl = environment.apiUrl + 'idtypes';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<IdTypes[]> {
        // return this.httpClient.get<IdTypes[]>(this.baseUrl).pipe(
        //     map(idtypes => {
        //         return idtypes;
        //     })
        // );
        return of(this.idtypes);
    }

    save(idtype: IdTypes): Observable<IdTypes> {
        // return this.httpClient.post<IdTypes>(this.baseUrl, idtype);
        this.idtypes.push(idtype);
        return of(idtype);
    }
}
