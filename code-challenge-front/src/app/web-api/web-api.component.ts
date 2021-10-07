import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styleUrls: ['./web-api.component.scss'],
})
export class WebApiComponent {
  webApiData: Array<any> = [
    {
      title: 'How it works?',
      src: './../../assets/img/web-api/how-it-works.png',
      alt: 'mvc architectural pattern',
      height: 500,
    },
    {
      title: 'How to test a Web API?',
      src: './../../assets/img/web-api/test.png',
      alt: 'mvvm architectural pattern',
      height: 400,
    },
  ];
  constructor() {}
}
