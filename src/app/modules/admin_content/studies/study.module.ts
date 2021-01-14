import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyCreateComponent } from './study-create/study-create.component';
import { StudyEditComponent } from './study-edit/study-edit.component';
import { StudyImportComponent } from './study-import/study-import.component';
import { StudyViewComponent } from './study-view/study-view.component';

@NgModule({
  declarations: [StudyCreateComponent, StudyEditComponent, StudyImportComponent, StudyViewComponent],
  imports: [
    CommonModule
  ]
})
export class StudyModule { }
