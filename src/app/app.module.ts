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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminModule} from './_shared/admin_layout/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,
    GroupsComponent,
    CoursesComponent,
    QuizzesComponent,
    QuestionsComponent,
    AssignmentsComponent
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
