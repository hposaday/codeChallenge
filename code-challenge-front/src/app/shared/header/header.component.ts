import { Component } from '@angular/core';

import { MenuButton } from '../models/menu-button.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuButtons: Array<MenuButton> = [
    {
      text: 'Code review',
      route: 'code-review',
    },
    {
      text: 'Architectural patterns',
      route: 'architectural-patterns',
    },
    {
      text: 'Design patterns',
      route: 'design-patterns',
    },
    {
      text: 'SOLID',
      route: 'solid',
    },
    {
      text: 'Web API',
      route: 'web-api',
    },
    {
      text: 'TDD',
      route: 'tdd',
    },
    {
      text: 'OOP',
      route: 'oop',
    },
    {
      text: 'Users',
      route: 'users',
    },
  ];
  constructor() {}
}
