import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Vendor} from '../_models/vendor';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class VendorService {

    vendors: Vendor[] = [];

    // baseUrl = environment.apiUrl + 'vendors';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Vendor[]> {
        // return this.httpClient.get<Vendor[]>(this.baseUrl).pipe(
        //     map(vendors => {
        //         return vendors;
        //     })
        // );
        return of(this.vendors);
    }

    save(vendor: Vendor): Observable<Vendor> {
        // return this.httpClient.post<Vendor>(this.baseUrl, vendor);
        this.vendors.push(vendor);
        return of(vendor);
    }
}
