import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {UserCreateComponent} from "../users/user-create/user-create.component";
import {UserEditComponent} from "../users/user-edit/user-edit.component";
import {UserImportComponent} from "../users/user-import/user-import.component";
import {AssumptionComponent} from "./assumption.component";
import {AssumptionCreateComponent} from "./assumption-create/assumption-create.component";
import {AssumptionEditComponent} from "./assumption-edit/assumption-edit.component";
import {AssumptionImportComponent} from "./assumption-import/assumption-import.component";
import {AssumptionViewComponent} from "./assumption-view/assumption-view.component";

const routes: Routes = [
  {
    path: '',
    component: AssumptionComponent,
  },
  {
    path: 'add',
    component: AssumptionCreateComponent
  },
  {
    path: 'edit',
    component: AssumptionEditComponent
  },
  {
    path: 'view',
    component: AssumptionEditComponent
  },
  {
    path: 'import',
    component: AssumptionImportComponent
  }
];

@NgModule({
  declarations: [
    AssumptionComponent,
    AssumptionCreateComponent,
    AssumptionEditComponent,
    AssumptionViewComponent,
    AssumptionImportComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AssumptionModule { }
