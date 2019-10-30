import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AddVehicleComponent } from './vehicles/add-vehicle/add-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../app/login/login.component'; 
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent , canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'addVehicle', component: AddVehicleComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

// export const routing = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class RoutingModule { }
