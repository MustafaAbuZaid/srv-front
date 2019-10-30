import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer, ReturnClass } from './customer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(customer: Customer) {
    return this.http.post<ReturnClass>(`/api/customers/register`, customer);
  }
}
