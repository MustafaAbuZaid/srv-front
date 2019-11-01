import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertService } from '../alert/alert.service'; 

import { Customer, ReturnClass } from '../customers/customer';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient,private alertService: AlertService) { }
  login(customername: string, password: string) {
    var customer = { customername: customername, password: password }
    return this.http.post<ReturnClass>(`/api/authentication/login`, customer)
      .pipe(map(customer => {
        // login successful if there's a jwt token in the response
        if (customer.data) {
          // store customer details and jwt token in local storage to keep customer logged in between page refreshes
          localStorage.setItem('currentcustomer', JSON.stringify(customer.data));
        } else {
          console.log('err');
          console.log(customer);
          return(this.alertService.error("User not exists,Please register"));

        }

        return customer.data;
      }));
  }

  logout() {
    // remove customer from local storage to log customer out
    localStorage.removeItem('currentcustomer');
  }

} 
