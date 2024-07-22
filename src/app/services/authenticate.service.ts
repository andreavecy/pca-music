import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

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
  registerUser(registerData: any){
    registerData.password = btoa(registerData.password)
    return this.storage.set("user", registerData);
  }
}
