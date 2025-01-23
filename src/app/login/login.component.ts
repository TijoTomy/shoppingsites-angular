import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup,Validators } from '@angular/forms';
import { RouterLink,Router  } from '@angular/router';
import {SignupService} from '../service/signup.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform = new FormGroup({
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(null,Validators.required),  
  });
  constructor(public signupservice:SignupService,private router:Router){}
  handleSubmit(){
    
    let currentuser:any= this.signupservice.userData.filter((data:any)=>data.email==this.loginform.value.email)
    if(currentuser[0].password==this.loginform.value.password){
      this.router.navigate(['/Home'])
    }
    console.log(currentuser)
  }
}
