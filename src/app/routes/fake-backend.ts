import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered customers
        let customers: any[] = JSON.parse(localStorage.getItem('customers')) || [];
        let vehicles: any[] = JSON.parse(localStorage.getItem('vehicles')) || [];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {
            // authenticate
            // if (request.url.endsWith('/customers/authenticate') && request.method === 'POST') {
            //     // find if any customer matches login credentials
            //     console.log('l')
            //     let filteredcustomers = customers.filter(customer => {
            //         return customer.customername === request.body.customername && customer.password === request.body.password;
            //     });

            //     if (filteredcustomers.length) {
            //         // if login details are valid return 200 OK with customer details and fake jwt token
            //         let customer = filteredcustomers[0];
            //         let body = {
            //             id: customer.id,
            //             customername: customer.customername,
            //             firstName: customer.firstName,
            //             lastName: customer.lastName,
            //             token: 'fake-jwt-token'
            //         };

            //         return of(new HttpResponse({ status: 200, body: body }));
            //     } else {
            //         // else return 400 bad request
            //         return throwError({ error: { message: 'customername or password is incorrect' } });
            //     }
            // }

            // get customers
            // if (request.url.endsWith('/customers') && request.method === 'GET') {
            //     // check for fake auth token in header and return customers if valid, this security is implemented server side in a real application
            //     // if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //     return of(new HttpResponse({ status: 200, body: customers }));
            //     // } else {
            //     //     // return 401 not authorised if token is null or invalid
            //     //     return throwError({ error: { message: 'Unauthorised' } });
            //     // }
            // }

            // get customer by id
            // if (request.url.match(/\/customers\/\d+$/) && request.method === 'GET') {
            //     // check for fake auth token in header and return customer if valid, this security is implemented server side in a real application
            //     // if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //     // find customer by id in customers array
            //     let urlParts = request.url.split('/');
            //     let id = parseInt(urlParts[urlParts.length - 1]);
            //     let matchedcustomers = customers.filter(customer => { return customer.id === id; });
            //     let customer = matchedcustomers.length ? matchedcustomers[0] : null;

            //     return of(new HttpResponse({ status: 200, body: customer }));
            //     // } else {
            //     // return 401 not authorised if token is null or invalid
            //     // return throwError({ error: { message: 'Unauthorised' } });
            //     // }
            // }

            // register customer
            // if (request.url.endsWith('/customers/register') && request.method === 'POST') {
            //     console.log('asd')
            //     // get new customer object from post body
            //     let newcustomer = request.body;

            //     // validation
            //     let duplicatecustomer = customers.filter(customer => { return customer.customername === newcustomer.customername; }).length;
            //     if (duplicatecustomer) {
            //         return throwError({ error: { message: 'customername "' + newcustomer.customername + '" is already taken' } });
            //     }

            //     // save new customer
            //     newcustomer.id = customers.length + 1;
            //     customers.push(newcustomer);
            //     localStorage.setItem('customers', JSON.stringify(customers));

            //     // respond 200 OK
            //     return of(new HttpResponse({ status: 200 }));
            // }
            // register vehicle
            // if (request.url.endsWith('/vehicles/register') && request.method === 'POST') {
            //     // get new vehicle object from post body
            //     let newVehicle = request.body;

            //     // validation
            //     let duplicatevehicle = vehicles.filter(vehicle => { return vehicle.plate === newVehicle.plate; }).length;
            //     if (duplicatevehicle) {
            //         return throwError({ error: { message: 'customername "' + newVehicle.customername + '" is already taken' } });
            //     }

            //     // save new vehicle
            //     newVehicle.id = vehicles.length + 1;
            //     vehicles.push(newVehicle);
            //     localStorage.setItem('vehicles', JSON.stringify(vehicles));

            //     return of(new HttpResponse({ status: 200 }));
            // }

            // // delete customer
            // if (request.url.match(/\/customers\/\d+$/) && request.method === 'DELETE') {
            //     // check for fake auth token in header and return customer if valid, this security is implemented server side in a real application
            //     // if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
            //     // find customer by id in customers array
            //     let urlParts = request.url.split('/');
            //     let id = parseInt(urlParts[urlParts.length - 1]);
            //     for (let i = 0; i < customers.length; i++) {
            //         let customer = customers[i];
            //         if (customer.id === id) {
            //             // delete customer
            //             customers.splice(i, 1);
            //             localStorage.setItem('customers', JSON.stringify(customers));
            //             break;
            //         }
            //     }

            //     // respond 200 OK
            //     return of(new HttpResponse({ status: 200 }));
            //     // } else {
            //     //     // return 401 not authorised if token is null or invalid
            //     //     return throwError({ error: { message: 'Unauthorised' } });
            //     // }
            // }

            // pass through any requests not handled above
            return next.handle(request);

        }))

            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};