import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Customer } from '../customers/customer';
import { CustomersService } from '../customers/customers.service';

@Component(
  {
    selector: 'customers-selector',
    templateUrl: 'customers.component.html'

})
export class CustomersComponent implements OnInit {
    currentcustomer: Customer;
    customers: Customer[] = [];

    constructor(private customersService: CustomersService) {
        this.currentcustomer = JSON.parse(localStorage.getItem('currentcustomer'));
    }

    ngOnInit() {
        this.loadAllCustomers();
    }

    deleteCustomer(id: number) {
        this.customersService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllCustomers() 
        });
    }

    private loadAllCustomers() {
        console.log('get')
        this.customersService.getAll().pipe(first()).subscribe(customers => { 
        console.log('customers')
            console.log(customers)
            this.customers = customers.data; 
        });
    }
}