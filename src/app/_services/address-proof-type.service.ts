import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {AddressProofType} from '../_models/address-proof-type';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AddressProofTypeService {
  addressprooftypes: AddressProofType[] = [];
  // baseUrl = environment.apiUrl + 'addressprooftypes';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<AddressProofType[]> {
      // return this.httpClient.get<AddressProofType[]>(this.baseUrl).pipe(
      //     map(addressprooftypes => {
      //         return addressprooftypes;
      //     })
      // );
      return of(this.addressprooftypes);
  }

  save(addressprooftype: AddressProofType): Observable<AddressProofType> {
      // return this.httpClient.post<AddressProofType>(this.baseUrl, addressprooftype);
      this.addressprooftypes.push(addressprooftype);
      return of(addressprooftype);
  }
}
