import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizzesComponent} from "./quizzes.component";
import {QuizzesCreateComponent} from "./quizzes-create/quizzes-create.component";
import {QuizzesEditComponent} from "./quizzes-edit/quizzes-edit.component";
import {QuizzesViewComponent} from "./quizzes-view/quizzes-view.component";
import {QuizzesImportComponent} from "./quizzes-import/quizzes-import.component";
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {UserCreateComponent} from "../users/user-create/user-create.component";
import {UserEditComponent} from "../users/user-edit/user-edit.component";
import {UserImportComponent} from "../users/user-import/user-import.component";

const routes: Routes = [
  {
    path: '',
    component: QuizzesComponent
  },
  {
    path: 'create',
    component: QuizzesCreateComponent
  },
  {
    path: 'edit',
    component: QuizzesEditComponent
  },
  {
    path: 'view',
    component: QuizzesViewComponent
  },
  {
    path: 'import',
    component: QuizzesImportComponent
  }
];

@NgModule({
  declarations: [
    QuizzesComponent,
    QuizzesCreateComponent,
    QuizzesEditComponent,
    QuizzesViewComponent,
    QuizzesImportComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class QuizzesModule { }
