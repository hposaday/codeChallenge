import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './components/create-user/create-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UsersComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'edit/:id', component: CreateUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
