import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vehicle } from './vehicle';

@Injectable()
export class VehiclesService {
    constructor(private http: HttpClient) { }

    getAll() {
        console.log('all');
        return this.http.get<Vehicle[]>(`/vehicles`);
    }

    getById(id: number) {
        return this.http.get(`/vehicles/` + id);
    }


    update(Vehicle: Vehicle) {
        return this.http.put(`/vehicles/` + Vehicle.id, Vehicle);
    }

    delete(id: number) {
        return this.http.delete(`/vehicles/` + id);
    }
}