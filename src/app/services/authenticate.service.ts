import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (
        credentials.email == "andrea@gmail.com" 
      ){
        accept("Login Correcto")
      }else{
        reject("Login Incorrecto")
      }
    })
  }
}
