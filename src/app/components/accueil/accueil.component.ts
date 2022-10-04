import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /** only used for angular image-slider kit **/
  imageObject = [{
       // image: 'https://assets/images/software-store-im-defil.gif',
        thumbImage: 'assets/images/dev-im-defil-bis.gif',
        title: 'SERVICES DE DEVELOPPEMENT',
       alt:'SERVICES DE DEVELOPPEBoutique E-CMENT'
    }, {
       // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
        thumbImage: 'assets/images/software-store-im-defil.gif',
        title: 'BOUTIQUE E-COMMERCE',
        alt:'BOUTIQUE E-COMMERCE'
    }, {
       // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
        thumbImage: 'assets/images/it-news-articles-im-defil-955x255.jpg',
        title: "JOURNAL DE L/''INFORMATIQUE / IT NEWS",
        alt: "JOURNAL DE L/''INFORMATIQUE / IT NEWS"
    }, {
       // image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
        thumbImage: 'assets/images/partenaires-im-defil-955x255.jpg',
        title: 'PARTENAIRES',
        alt:'PARTENAIRES'
    }];


}
