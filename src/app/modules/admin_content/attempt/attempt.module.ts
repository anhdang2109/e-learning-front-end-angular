import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AttemptComponent} from "./attempt.component";
import {AttemptCreateComponent} from "./attempt-create/attempt-create.component";
import {AttemptEditComponent} from "./attempt-edit/attempt-edit.component";
import {AttemptImportComponent} from "./attempt-import/attempt-import.component";
import {AttemptViewComponent} from "./attempt-view/attempt-view.component";

const routes: Routes = [
  {
    path: '',
    component: AttemptComponent,
  },
  {
    path: 'add',
    component: AttemptCreateComponent
  },
  {
    path: 'edit',
    component: AttemptEditComponent
  },
  {
    path: 'view',
    component: AttemptEditComponent
  },
  {
    path: 'import',
    component: AttemptImportComponent
  }
];

@NgModule({
  declarations: [
    AttemptComponent,
    AttemptCreateComponent,
    AttemptEditComponent,
    AttemptViewComponent,
    AttemptImportComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AttemptModule { }
