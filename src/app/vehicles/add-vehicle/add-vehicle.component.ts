import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../alert/alert.service';
import { AddVehicleService } from './add-vehicle.service'; 

@Component({
    // selector: 'vehicle-selector',
    templateUrl: 'add-vehicle.component.html'
})
export class AddVehicleComponent implements OnInit {
    vehicleForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private addVehicleService: AddVehicleService,
        private alertService: AlertService) { }

    ngOnInit() {
        console.log('ss')
        this.vehicleForm = this.formBuilder.group({
            plate: ['', Validators.required],
            customer: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.vehicleForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.vehicleForm.invalid) {
            return;
        }

        this.loading = true;
        this.addVehicleService.register(this.vehicleForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/vehicles']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
