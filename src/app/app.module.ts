import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './_shared/admin_layout/admin-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {GroupsComponent} from './modules/admin_content/groups/groups.component';
import {CoursesComponent} from './modules/admin_content/courses/courses.component';
import {AssignmentsComponent} from './modules/admin_content/assignments/assignments.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdminModule} from './_shared/admin_layout/admin.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './modules/authentication/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { RegisterComponent } from './modules/authentication/register/register.component';
import { HomeLayoutComponent } from './_shared/home_layout/home-layout.component';
import {HomeModule} from './_shared/home_layout/home.module';
import { UserEditComponent } from './modules/home_content/user/user-edit/user-edit.component';
import { ChangepasswordComponent } from './modules/changepassword/changepassword.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireStorageModule} from "@angular/fire/storage";
import { UsersDeletedComponent } from './modules/admin_content/users/users-deleted/users-deleted.component';
import { TableQuizzesComponent } from './modules/home_content/quizzes/table-quizzes/table-quizzes.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeLayoutComponent,
    GroupsComponent,
    CoursesComponent,
    AssignmentsComponent,
    LoginComponent,
    RegisterComponent,
    ChangepasswordComponent,
    UsersDeletedComponent,
    TableQuizzesComponent
  ],
  imports: [
    HomeModule,
    AdminModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
