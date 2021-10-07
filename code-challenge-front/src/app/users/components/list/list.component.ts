import { Observable, of } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users$ = of(response.data);
    });
  }

  deleteUser(user: User) {
    if (confirm('¿Estas seguro de eliminar este usuario?')) {
      this.userService.deleteUser(user.id).subscribe(
        () => {
          alert('usuario eliminado exitosamente');
          this.getAllUsers();
        },
        (err) => alert(`hubo un error al eliminar el usuario: ERR ${err}`)
      );
    }
  }
}
