import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-architectural-patterns',
  templateUrl: './architectural-patterns.component.html',
  styleUrls: ['./architectural-patterns.component.scss'],
})
export class ArchitecturalPatternsComponent {
  architecturalPatterns: Array<any> = [
    {
      title: 'MVC',
      src: './../../assets/img/architectural-patterns/mvc.jpeg',
      alt: 'mvc architectural pattern',
      height: 500,
    },
    {
      title: 'MVVM',
      src: './../../assets/img/architectural-patterns/mvvm.png',
      alt: 'mvvm architectural pattern',
      height: 400,
    },
    {
      title: 'Client-Server',
      src: './../../assets/img/architectural-patterns/client-server.png',
      alt: 'client-server architectural pattern',
      height: 400,
    },
    {
      title: 'Master-Slave',
      src: './../../assets/img/architectural-patterns/master-slave.png',
      alt: 'master-slave architectural pattern',
      height: 400,
    },
    {
      title: 'Peer-to-Peer',
      src: './../../assets/img/architectural-patterns/p2p.png',
      alt: 'peer-to-peer architectural pattern',
      height: 400,
    },
  ];
  constructor() {}
}
