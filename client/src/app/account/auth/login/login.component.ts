import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';
import {AlertService} from '../../../core/services/alert.services'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  loading = false;
  
  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public authenticationService: AuthenticationService, public authFackservice: AuthfakeauthenticationService,
    private alertService: AlertService) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['chatsaza123@gmail.com', [Validators.required]],
      password: ['chatsaza123', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true
    //alert
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
    }
     
    this.authFackservice.login(this.f.username.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      _data => {
          if(_data == null) {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          } else {
            this.loading = true;
            this.alertService.success;
            if(this.loading) {
                this.router.navigate(['']);
            }
          }
        

      }
    )
  }
  
}