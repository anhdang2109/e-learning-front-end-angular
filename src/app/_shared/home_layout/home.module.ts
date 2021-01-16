import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeHeaderComponent} from './home-header/home-header.component';
import {HomeFooterComponent} from './home-footer/home-footer.component';
import {QuizzesComponent} from '../../modules/home_content/quizzes/quizzes.component';
import {UserComponent} from '../../modules/home_content/user/user.component';
import {AttemptsComponent} from '../../modules/home_content/attempts/attempts.component';
import {AttemptViewComponent} from '../../modules/home_content/attempts/attempt-view/attempt-view.component';
import {HomeComponent} from '../../modules/home_content/home.component';
import {ContactComponent} from '../../modules/home_content/contact/contact.component';
import {UserEditComponent} from '../../modules/home_content/user/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/index'
  },
  {
    path: 'index',
    component: HomeComponent
  },
  {
    path: 'quizzes',
    component: QuizzesComponent
  },
  {
    path: 'quizzes/attempts',
    component: AttemptsComponent
  },
  {
    path: 'quizzes/attempts/view',
    component: AttemptViewComponent,
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/edit',
    component: UserEditComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    UserComponent,
    UserEditComponent,
    AttemptsComponent,
    AttemptViewComponent,
    QuizzesComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    UserComponent,
    UserEditComponent,
    AttemptsComponent,
    AttemptViewComponent,
    QuizzesComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule {
}
