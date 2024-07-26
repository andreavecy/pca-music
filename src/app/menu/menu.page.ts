import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  closeMenu(){
    console.log("cerrar menu");
    this.menu.close();
  }

  logout(){
    console.log("cerrar session")
    this.navCtrl.navigateRoot("/login");
  }

}
