import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import {UsersComponent} from './users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserImportComponent } from './user-import/user-import.component';



const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'add',
    component: UserCreateComponent
  },
  {
    path: 'edit',
    component: UserEditComponent
  },
  {
    path: 'view',
    component: UserEditComponent
  },
  {
    path: 'import',
    component: UserImportComponent
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserViewComponent,
    UserImportComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserModule { }
