import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudiesComponent} from './studies.component';
import {StudyCreateComponent} from './study-create/study-create.component';
import {StudyEditComponent} from './study-edit/study-edit.component';
import {StudyImportComponent} from './study-import/study-import.component';
import {StudyViewComponent} from './study-view/study-view.component';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: StudiesComponent
  },
  {
    path: 'create',
    component: StudyCreateComponent
  },
  {
    path: 'edit/:id',
    component: StudyEditComponent
  },
  {
    path: 'view/:id',
    component: StudyViewComponent
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
  exports: [
    StudiesComponent,
    StudyCreateComponent,
    StudyEditComponent,
    StudyImportComponent,
    StudyViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class StudyModule { }
