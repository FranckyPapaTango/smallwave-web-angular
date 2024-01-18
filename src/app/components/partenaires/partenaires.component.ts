import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
imageObject = [{
     // image: 'https://assets/images/software-store-im-defil.gif',
      thumbImage: 'assets/images/img4.jpg',
      title: 'LIFERAY Corporation',
     alt:'LIFERAY Corporation'
  }, {
     // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage: 'assets/images/img7.jpg',
      title: 'DEVELOPPEZ.COM',
      alt:'DEVELOPPEZ.COM'
  }, {
     // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'assets/images/img6.jpg',
      title: "CODEUR.COM",
      alt: "CODEUR.COM"
  }, {
     // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'assets/images/img3.jpg',
      title: 'RAFAROS-IT',
      alt:'RAFAROS-IT'
  }, {
     // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'assets/images/img2.jpg',
      title: 'PAYPAL',
      alt:'PAYPAL'
  }];

}
