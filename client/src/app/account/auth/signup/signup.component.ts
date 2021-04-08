import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../core/services/auth.service';
import { UserProfileService } from '../../../core/services/user.service';
import {AuthfakeauthenticationService} from '../../../core/services/authfake.service'
import {User} from '../../../core/models/auth.models'
  import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

/**
 * Signup component
 */
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  user : User = new User();

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
              private userService: UserProfileService,
              private AuthfakeauthenticationService: AuthfakeauthenticationService) { }


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['',Validators.required],
      phoneNumber: ['',[Validators.required]],
      password: ['',Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } 
        this.AuthfakeauthenticationService.register(this.signupForm.value)
          .pipe(first())
          .subscribe(
            _data => {
              console.log(_data);
              this.successmsg = true;
              this.user = new User();
              if (this.successmsg) {
                this.router.navigate(['/account/login']);
              }
            },
            error => {
              this.error = error ? error : '';
            });
  }
}
