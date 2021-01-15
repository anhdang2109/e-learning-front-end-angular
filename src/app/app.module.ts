import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './_shared/admin_layout/admin-layout.component';
import {HomeComponent} from './modules/home_content/home.component';
import {AppRoutingModule} from './app-routing.module';
import {GroupsComponent} from './modules/admin_content/groups/groups.component';
import {CoursesComponent} from './modules/admin_content/courses/courses.component';
import {QuizzesComponent} from './modules/admin_content/quizzes/quizzes.component';
import {QuestionsComponent} from './modules/admin_content/questions/questions.component';
import {AssignmentsComponent} from './modules/admin_content/assignments/assignments.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminModule} from './_shared/admin_layout/admin.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './modules/authentication/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { RegisterComponent } from './modules/authentication/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,
    GroupsComponent,
    CoursesComponent,
    AssignmentsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AdminModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
