import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AdminLayoutComponent} from './_shared/admin_layout/admin-layout.component';
import {HomeComponent} from './modules/home_content/home.component';
import {AppRoutingModule} from './app-routing.module';
import { GroupsComponent } from './modules/admin_content/groups/groups.component';
import { CoursesComponent } from './modules/admin_content/courses/courses.component';
import { QuizzesComponent } from './modules/admin_content/quizzes/quizzes.component';
import { QuestionsComponent } from './modules/admin_content/questions/questions.component';
import { AssignmentsComponent } from './modules/admin_content/assignments/assignments.component';
import { StudiesComponent } from './modules/admin_content/studies/studies.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminModule} from './_shared/admin_layout/admin.module';
import { AssumptionComponent } from './modules/admin_content/assumption/assumption.component';
import { AssumptionCreateComponent } from './modules/admin_content/assumption/assumption-create/assumption-create.component';
import { AssumptionEditComponent } from './modules/admin_content/assumption/assumption-edit/assumption-edit.component';
import { AssumptionImportComponent } from './modules/admin_content/assumption/assumption-import/assumption-import.component';
import { AssumptionViewComponent } from './modules/admin_content/assumption/assumption-view/assumption-view.component';
import { AttemptComponent } from './modules/admin_content/attempt/attempt.component';
import { AttemptCreateComponent } from './modules/admin_content/attempt/attempt-create/attempt-create.component';
import { AttemptEditComponent } from './modules/admin_content/attempt/attempt-edit/attempt-edit.component';
import { AttemptImportComponent } from './modules/admin_content/attempt/attempt-import/attempt-import.component';
import { AttemptViewComponent } from './modules/admin_content/attempt/attempt-view/attempt-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,
    GroupsComponent,
    CoursesComponent,
    QuizzesComponent,
    QuestionsComponent,
    AssignmentsComponent,
    StudiesComponent,
    AssumptionComponent,
    AssumptionCreateComponent,
    AssumptionEditComponent,
    AssumptionImportComponent,
    AssumptionViewComponent,
    AttemptComponent,
    AttemptCreateComponent,
    AttemptEditComponent,
    AttemptImportComponent,
    AttemptViewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
