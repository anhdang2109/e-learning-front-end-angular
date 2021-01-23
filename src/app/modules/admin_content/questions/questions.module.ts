import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QuestionsComponent} from "./questions.component";
import {
  DialogQuestionAnswerComponent,
  DialogQuestionInputComponent,
  QuestionsCreateComponent
} from './questions-create/questions-create.component';
import {
  DialogEditQuestionAnswerComponent,
  DialogEditQuestionInputComponent,
  QuestionsEditComponent
} from './questions-edit/questions-edit.component';
import {QuestionsImportComponent} from "./questions-import/questions-import.component";
import {QuestionsViewComponent} from "./questions-view/questions-view.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxPaginationModule} from "ngx-pagination";


const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent
  },
  {
    path: 'create',
    component: QuestionsCreateComponent
  },
  {
    path: 'edit/:idQuestion',
    component: QuestionsEditComponent
  },
  {
    path: 'view/:idQuestion',
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
    QuestionsViewComponent,
    DialogQuestionAnswerComponent,
    DialogQuestionInputComponent,
    DialogEditQuestionInputComponent,
    DialogEditQuestionAnswerComponent
  ],
    imports: [
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        RouterModule.forChild(routes),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class QuestionsModule { }
