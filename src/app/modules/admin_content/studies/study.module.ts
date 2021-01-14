import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import {RouterModule, Routes} from "@angular/router";
import {StudiesComponent} from "./studies.component";
import {StudyCreateComponent} from "./study-create/study-create.component";
import {StudyEditComponent} from "./study-edit/study-edit.component";
import {StudyImportComponent} from "./study-import/study-import.component";
import {StudyViewComponent} from "./study-view/study-view.component";
=======
import { StudyCreateComponent } from './study-create/study-create.component';
import { StudyEditComponent } from './study-edit/study-edit.component';
import { StudyImportComponent } from './study-import/study-import.component';
import { StudyViewComponent } from './study-view/study-view.component';
import {RouterModule, Routes} from "@angular/router";
import {StudiesComponent} from "./studies.component";
>>>>>>> 649cfcc79633db762424c350b74ddbc2f0d3e67e

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
