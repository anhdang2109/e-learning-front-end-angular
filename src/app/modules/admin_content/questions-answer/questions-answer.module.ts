import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "../users/users.component";
import {UserCreateComponent} from "../users/user-create/user-create.component";
import {UserEditComponent} from "../users/user-edit/user-edit.component";
import {UserImportComponent} from "../users/user-import/user-import.component";
import {QuestionAnswerCreateComponent} from "./question-answer-create/question-answer-create.component";
import {QuestionsAnswerComponent} from "./questions-answer.component";
import {QuestionAnswerEditComponent} from "./question-answer-edit/question-answer-edit.component";
import {QuestionAnswerViewComponent} from "./question-answer-view/question-answer-view.component";
import {QuestionAnswerImportComponent} from "./question-answer-import/question-answer-import.component";

const routes: Routes = [
  {
    path: '',
    component: QuestionsAnswerComponent
  },
  {
    path: 'add',
    component: QuestionAnswerCreateComponent
  },
  {
    path: 'edit',
    component: QuestionAnswerEditComponent
  },
  {
    path: 'view',
    component: QuestionAnswerViewComponent
  },
  {
    path: 'import',
    component: QuestionAnswerImportComponent
  }
];


@NgModule({
  declarations: [
    QuestionsAnswerComponent,
    QuestionAnswerCreateComponent,
    QuestionAnswerEditComponent,
    QuestionAnswerViewComponent,
    QuestionAnswerImportComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class QuestionsAnswerModule { }
