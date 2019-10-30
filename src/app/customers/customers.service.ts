import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer, ReturnClass } from './customer';

@Injectable()
export class CustomersService {
    constructor(private http: HttpClient) { }

    getAll() {
        console.log('all');
        return this.http.get<ReturnClass>(`/api/customers/getAllCustomers`);
    }

    getById(id: number) {
        return this.http.get<ReturnClass>(`/customers/` + id);
    }

    delete(id: number) {
        return this.http.delete(`/customers/` + id);
    }
}