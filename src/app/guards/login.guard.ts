import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private router: Router, private storage: Storage){}
  async canActivate(){
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    if (isUserLoggedIn) {
      return true;
    }else{
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
