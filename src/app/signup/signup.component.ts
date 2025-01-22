import { Component } from '@angular/core';
import { RouterLink,Router  } from '@angular/router';
import { ReactiveFormsModule,FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupform:any={};
    paymentForm = new FormGroup({
      firstName: new FormControl(null,Validators.required),
      lastNeame: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,Validators.required),  
    });
  constructor(private router:Router){}
  handleSubmit(){

  }

}
