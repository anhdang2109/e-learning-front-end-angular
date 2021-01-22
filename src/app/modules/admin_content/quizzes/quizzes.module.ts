import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizzesComponent} from "./quizzes.component";
import {QuizzesCreateComponent} from "./quizzes-create/quizzes-create.component";
import {QuizzesEditComponent} from "./quizzes-edit/quizzes-edit.component";
import {QuizzesViewComponent} from "./quizzes-view/quizzes-view.component";
import {QuizzesImportComponent} from "./quizzes-import/quizzes-import.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from "ngx-pagination";

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
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
        CommonModule,
        NgxPaginationModule
    ]
})
export class QuizzesModule { }
