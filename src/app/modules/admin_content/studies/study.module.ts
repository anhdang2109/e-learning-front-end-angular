import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyCreateComponent } from './study-create/study-create.component';
import { StudyEditComponent } from './study-edit/study-edit.component';
import { StudyImportComponent } from './study-import/study-import.component';
import { StudyViewComponent } from './study-view/study-view.component';
import {RouterModule, Routes} from "@angular/router";
import {StudiesComponent} from "./studies.component";

const routes: Routes = [
  {
    path: '',
    component: StudiesComponent
  },
  {
    path: 'add',
    component: StudyCreateComponent
  },
  {
    path: 'edit',
    component: StudyEditComponent
  },
  {
    path: 'view',
    component: StudyEditComponent
  },
  {
    path: 'import',
    component: StudyImportComponent
  }
];

@NgModule({
  declarations: [
    StudiesComponent,
    StudyCreateComponent,
    StudyEditComponent,
    StudyImportComponent,
    StudyViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class StudyModule { }
