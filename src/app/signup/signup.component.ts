import { Component } from '@angular/core';
import { RouterLink,Router  } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';
import { ReactiveFormsModule,FormControl, FormGroup,Validators } from '@angular/forms';
import {SignupService} from '../service/signup.service';
@Component({
  selector: 'app-signup',
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupform = new FormGroup({
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,Validators.required),  
    });
  constructor(private router:Router,public signupservice:SignupService){}
  handleSubmit(){
this.signupservice.storeUserData(this.signupform.value)
this.router.navigate(['/Login'])
  }

}
