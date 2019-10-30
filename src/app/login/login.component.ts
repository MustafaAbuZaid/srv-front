import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators'; 
import { LoginService } from './login.service'; 
import { AlertService } from '../alert/alert.service'; 
// import { LoginService } from '../login/login.service';

@Component({
    selector : 'login-selector',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: LoginService,
        private alertService: AlertService
         ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            customername: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; } 
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.customername.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/vehicles']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
