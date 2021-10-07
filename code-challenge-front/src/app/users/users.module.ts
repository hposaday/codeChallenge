import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListComponent } from './components/list/list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [ListComponent, UsersComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class UsersModule {}
