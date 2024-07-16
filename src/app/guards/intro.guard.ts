import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  async canActivate() {
    const intro = await this.storage.get("isIntroShowed")
    if (intro){
      return true;
    }else {
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
}