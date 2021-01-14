import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../../modules/admin_content/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin_content/dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    loadChildren: () => import('../../modules/admin_content/users/user.module').then(m => m.UserModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('../../modules/admin_content/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('../../modules/admin_content/questions/questions.module').then(m => m.QuestionsModule)
  },
  {
    path: 'questions-answer',
    loadChildren: () => import('../../modules/admin_content/questions-answer/questions-answer.module').then(m => m.QuestionsAnswerModule)
  },
  {
    path: 'quizzes',
    loadChildren: () => import('../../modules/admin_content/quizzes/quizzes.module').then(m => m.QuizzesModule)
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AdminModule { }
