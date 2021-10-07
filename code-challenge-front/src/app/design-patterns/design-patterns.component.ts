import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-patterns',
  templateUrl: './design-patterns.component.html',
  styleUrls: ['./design-patterns.component.scss'],
})
export class DesignPatternsComponent {
  designPatterns: Array<any> = [
    {
      title: 'Singleton',
      src: './../../assets/img/design-patterns/singleton.png',
      alt: 'singleton design pattern',
      height: 500,
    },
    {
      title: 'Factory Method',
      src: './../../assets/img/design-patterns/factory.png',
      alt: 'factory design pattern',
      height: 500,
    },
    {
      title: 'Decorator',
      src: './../../assets/img/design-patterns/decorator.png',
      alt: 'decorator design pattern',
      height: 500,
    },
    {
      title: 'Bridge',
      src: './../../assets/img/design-patterns/bridge.png',
      alt: 'bridge design pattern',
      height: 500,
    },
    {
      title: 'Observer',
      src: './../../assets/img/design-patterns/observer.png',
      alt: 'observer design pattern',
      height: 500,
    },
    {
      title: 'Chain of responsability',
      src: './../../assets/img/design-patterns/chain-of-responsibility.png',
      alt: 'observer design pattern',
      height: 500,
    },
  ];

  constructor() {}
}
