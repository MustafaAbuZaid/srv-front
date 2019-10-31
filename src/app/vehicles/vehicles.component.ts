import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Vehicle } from '../vehicles/vehicle';
import { VehiclesService } from '../vehicles/vehicles.service';

@Component(
    {
        // selector: 'vehicles-selector',
        templateUrl: 'vehicles.component.html'

    })
export class VehiclesComponent implements OnInit {
    currentVehicle: Vehicle;
    Vehicles: Vehicle[] = [];

    constructor(private VehiclesService: VehiclesService) {
        this.currentVehicle = JSON.parse(localStorage.getItem('currentVehicle'));
    }
    cols: any[]
    ngOnInit() {

        this.cols = [
            { field: 'plate', header: 'Vehicle Plate' },
            { field: 'customer', header: 'Customer' },
            { field: 'address', header: 'Address' },
            { field: 'status', header: 'Status' }
        ];
        this.loadAllVehicles();
        this.startTimer();

    }
    filterData(e){
this.Vehicles = this.allData;
this.Vehicles = this.Vehicles.filter(a=>a.customer.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
    }

    deleteVehicle(id: number) {
        this.VehiclesService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllVehicles()
        });
    }
    interval;

    startTimer() {
        this.interval = setInterval(() => {
            console.log('ho');
            this.loadAllVehicles();
        }, 60000)
    }
allData = [];

    private loadAllVehicles() {
        console.log('get')
        this.Vehicles = [];
        var st1 = Math.floor(Math.random() * 3);
        var st2 = Math.floor(Math.random() * 3);
        var st3 = Math.floor(Math.random() * 3);
        var st4 = Math.floor(Math.random() * 3);

        var v1 = { id: 1, plate: 'ABC123', status: st1, customer: 'Kalles Grustransporter AB', address: 'Cementvägen 8, 111 11 Södertälje' };
        var v2 = { id: 2, plate: 'DEF456', status: st2, customer: 'Kalles Grustransporter AB', address: 'Cementvägen 8, 111 11 Södertälje' };
        var v3 = { id: 3, plate: 'GHI789', status: st3, customer: 'Kalles Grustransporter AB', address: 'Cementvägen 8, 111 11 Södertälje' };
        var v4 = { id: 4, plate: 'JKL012', status: st4, customer: 'Johans Bulk AB', address: 'Balkvägen 12, 222 22 Stockholm' };
        var v5 = { id: 4, plate: 'PQR678', status: st4, customer: 'Haralds Värdetransporter AB', address: 'Budgetvägen 1, 333 33 Uppsala' };
        var v6 = { id: 4, plate: 'STU901', status: st4, customer: 'Haralds Värdetransporter AB', address: 'Budgetvägen 1, 333 33 Uppsala' };
        this.Vehicles.push(v2, v5, v1, v4, v3, v6);
this.allData = this.Vehicles;
        // this.VehiclesService.getAll().pipe(first()).subscribe(Vehicles => {
        // this.Vehicles = Vehicles;
        // });
    }
}