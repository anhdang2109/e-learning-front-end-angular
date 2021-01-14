import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {UserCreateComponent} from "../users/user-create/user-create.component";
import {UserEditComponent} from "../users/user-edit/user-edit.component";
import {UserImportComponent} from "../users/user-import/user-import.component";
import {QuestionsComponent} from "./questions.component";
import {QuestionsCreateComponent} from "./questions-create/questions-create.component";
import {QuestionsEditComponent} from "./questions-edit/questions-edit.component";
import {QuestionsImportComponent} from "./questions-import/questions-import.component";
import {QuestionsViewComponent} from "./questions-view/questions-view.component";


const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent
  },
  {
    path: 'add',
    component: QuestionsCreateComponent
  },
  {
    path: 'edit',
    component: QuestionsEditComponent
  },
  {
    path: 'view',
    component: QuestionsViewComponent
  },
  {
    path: 'import',
    component: QuestionsImportComponent
  }
];


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsCreateComponent,
    QuestionsEditComponent,
    QuestionsImportComponent,
    QuestionsViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class QuestionsModule { }
