import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Buyer} from '../_models/buyer';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BuyerService {

  buyers: Buyer[] = [
        { id: 1, 
          buyerName: 'Shazz', 
          TelNo: 8888999,
          incorpRegNo: 2009,
          Email: 'vshaz@gmail.com',
          contactPersonName: 'shazz',
          accNo: 2034890,
          idNo: '05117915A05',
          physicalAddress: '3 Twiza Rd',
          bankName: 'Nedbank',
          idType: 'National ID',
          addressProofType: 'Physical Address',}
    ];
    // baseUrl = environment.apiUrl + 'buyers';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Buyer[]> {
        // return this.httpClient.get<Buyer[]>(this.baseUrl).pipe(
        //     map(buyers => {
        //         return buyers;
        //     })
        // );
        return of(this.buyers);
    }

    save(buyer: Buyer): Observable<Buyer> {
        // return this.httpClient.post<Buyer>(this.baseUrl, buyer);
        this.buyers.push(buyer);
        return of(buyer);
    }
}
