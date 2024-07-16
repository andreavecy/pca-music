import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "Titulo de slide 1",
      icon: "diamond-outline",
      avatar: "https://as1.ftcdn.net/v2/jpg/00/89/61/72/1000_F_89617216_hXm7SwZCOP1KaWVBKl7OnTnxBQOzst8Q.jpg",
      image: "https://elcomercio.pe/resizer/myMotgdrOB9o-s2Fsp-6mmQdQEw=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/23A55HEUUBEVPPRXJYG7BZQWQY.jpg",
      description: "Texto de description"
    },
    {
      title: "Titulo de slide 2",
      icon: "diamond-outline",
      avatar: "https://as1.ftcdn.net/v2/jpg/00/89/61/72/1000_F_89617216_hXm7SwZCOP1KaWVBKl7OnTnxBQOzst8Q.jpg",
      image: "https://elcomercio.pe/resizer/myMotgdrOB9o-s2Fsp-6mmQdQEw=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/23A55HEUUBEVPPRXJYG7BZQWQY.jpg",
      description: "Texto de description 2 hola hola"
    },
    {
      title: "Titulo de slide 3",
      icon: "diamond-outline",
      avatar: "https://as1.ftcdn.net/v2/jpg/00/89/61/72/1000_F_89617216_hXm7SwZCOP1KaWVBKl7OnTnxBQOzst8Q.jpg",
      image: "https://elcomercio.pe/resizer/myMotgdrOB9o-s2Fsp-6mmQdQEw=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/23A55HEUUBEVPPRXJYG7BZQWQY.jpg",
      description: "Texto de description 3 hola ultimo slide"
    }
  ]

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    console.log("hola intro")
  }

  close() {
    //console.log("estoy intentando cerrar la intro");
    this.storage.set("isIntroShowed", true)
    this.router.navigateByUrl("/home")
  }

}
