import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from '../app/routes/fake-backend';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginService } from './login/login.service';
// import { AlertComponent } from './_directives';
import { AuthGuard } from './guards/auth.guard';
// import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService } from '../app/alert/alert.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';
import { CustomersService } from './customers/customers.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesService } from './vehicles/vehicles.service';
import { AddVehicleComponent } from './vehicles/add-vehicle/add-vehicle.component';
// import { TreeTableModule } from 'primeng/primeng'; // Here
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RoutingModule,
        RouterModule
    ],
    declarations: [
        AppComponent,
        // HomeComponent,
        LoginComponent,
        DashboardComponent,
        CustomersComponent,
        RegisterComponent,
        AlertComponent,
        VehiclesComponent,
        AddVehicleComponent
        // RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        LoginService,
        CustomersService,
        VehiclesService,
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }