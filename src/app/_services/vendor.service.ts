import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Vendor} from '../_models/vendor';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class VendorService {

    vendors: Vendor[] = [
        {
            id: 1,
            orgName: 'Shazz',
            orgTelNo: 8888999,
            incorpRegNo: 2009,
            orgEmail: 'vshaz@gmail.com',
            contactPersonName: 'shazz',
            accNo: 2034890,
            idNo: '05117915A05',
            physicalAddress: '3 Twiza Rd',
            bankName: 'Nedbank',
            idType: 'National ID',
            addressProofType: 'Physical Address'
        }
    ];

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
