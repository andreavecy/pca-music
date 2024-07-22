import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthenticateService
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ])
      )
    })
  }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }

  register(registerData: any){
    console.log(registerData);
    this.authService.registerUser(registerData).then(res => {
      this.navCtrl.navigateBack("/login");
    });
  }

}
