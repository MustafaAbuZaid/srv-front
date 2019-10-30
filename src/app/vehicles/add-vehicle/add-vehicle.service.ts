import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vehicle } from '../vehicle';

@Injectable({
  providedIn: 'root'
})
export class AddVehicleService {
  constructor(private http: HttpClient) { }
  register(vehicle: Vehicle) {
    console.log('asfd')
    return this.http.post(`/api/vehicles/register`, vehicle);
  }
}
