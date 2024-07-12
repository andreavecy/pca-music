import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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
      description: "Texto de description"
    },
    {
      title: "Titulo de slide 3",
      icon: "diamond-outline",
      avatar: "https://as1.ftcdn.net/v2/jpg/00/89/61/72/1000_F_89617216_hXm7SwZCOP1KaWVBKl7OnTnxBQOzst8Q.jpg",
      image: "https://elcomercio.pe/resizer/myMotgdrOB9o-s2Fsp-6mmQdQEw=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/23A55HEUUBEVPPRXJYG7BZQWQY.jpg",
      description: "Texto de description"
    }
  ]

  constructor() {}

}