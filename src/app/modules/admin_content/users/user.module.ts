import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserCreateComponent} from './user-create/user-create.component';
import {UsersComponent} from './users.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserViewComponent} from './user-view/user-view.component';
import {UserImportComponent} from './user-import/user-import.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersDeletedComponent} from './users-deleted/users-deleted.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: 'deleted',
    component: UsersDeletedComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  },
  {
    path: 'view/:id',
    component: UserViewComponent
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
  exports: [
    UsersComponent,
    UserCreateComponent,
    UserEditComponent,
    UserViewComponent,
    UserImportComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatSelectModule
  ]
})
export class UserModule {
}
