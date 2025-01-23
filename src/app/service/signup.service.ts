import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userData:any=[];

  constructor() { }
  storeUserData(userItem:any){
    this.userData.push(userItem)
console.log(this.userData)
  }
}
