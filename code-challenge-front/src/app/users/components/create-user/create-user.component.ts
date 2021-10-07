import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  currentUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    occupation: '',
  };

  isCreating: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.isCreating = false;
      this.userService
        .getUserById(this.activatedRoute.snapshot.params.id)
        .subscribe((response) => {
          console.log(response, 'response');
          this.currentUser = response.data;
          const { firstName, lastName, email, age, occupation } =
            this.currentUser;
          this.userForm.setValue({
            firstName,
            lastName,
            email,
            age,
            occupation,
          });
        });
    }
    this.initForm();
  }

  initForm() {
    console.log('llamada a initform');
    this.userForm = this.formBuilder.group({
      firstName: new FormControl(this.currentUser.firstName, [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      lastName: new FormControl(this.currentUser.lastName, [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl(this.currentUser.email, [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl(this.currentUser.age, [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      occupation: new FormControl(this.currentUser.occupation, [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
    });
  }

  createUser() {
    this.userService.createUser(this.userForm.value).subscribe(
      (response) => {
        alert('usuario creado exitosamento');
        this.router.navigate(['/users']);
      },
      (error) => {
        alert(`error creando usuario, revisa los datos: ERR ${error}`);
      }
    );
  }

  editUser() {
    const { firstName, lastName, email, age, occupation } = this.userForm.value;
    const id = this.currentUser.id;
    this.currentUser = { id, firstName, lastName, email, age, occupation };

    this.userService.editUser(this.currentUser).subscribe(
      (response) => {
        alert('usuario editado exitosamente');
        this.router.navigate(['/users']);
      },
      (err) => {
        alert(`hubo un error editando el usuario: ERR ${err}`);
      }
    );
  }
}
