import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {AddressType} from '../_models/address-type';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AddressTypeService {

  addresstypes: AddressType[] = [];
    // baseUrl = environment.apiUrl + 'addresstypes';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<AddressType[]> {
        // return this.httpClient.get<AddressType[]>(this.baseUrl).pipe(
        //     map(addresstypes => {
        //         return addresstypes;
        //     })
        // );
        return of(this.addresstypes);
    }

    save(addresstype: AddressType): Observable<AddressType> {
        // return this.httpClient.post<AddressType>(this.baseUrl, addresstype);
        this.addresstypes.push(addresstype);
        return of(addresstype);
    }
}
