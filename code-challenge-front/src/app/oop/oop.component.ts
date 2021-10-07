import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oop',
  templateUrl: './oop.component.html',
  styleUrls: ['./oop.component.scss'],
})
export class OopComponent {
  oopData: Array<any> = [
    {
      title: 'What is a class?',
      src: './../../assets/img/oop/class.png',
      alt: 'what is a class img',
      height: 500,
    },
    {
      title: 'What is inheritance?',
      src: './../../assets/img/oop/inheritance.png',
      alt: 'what is inheritance img',
      height: 500,
    },
    {
      title: 'Whata are interfaces?',
      src: './../../assets/img/oop/interface.jpeg',
      alt: 'what are interfaces img',
      height: 500,
    },
    {
      title: 'What is polymorphism?',
      src: './../../assets/img/oop/polymorphism.png',
      alt: 'what is polymorphism img',
      height: 500,
    },
  ];
  constructor() {}
}
