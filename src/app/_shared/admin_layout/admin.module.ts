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
    path: 'study',
    loadChildren: () => import('../../modules/admin_content/studies/study.module').then(m => m.StudyModule)
  },
  {
    path: 'assumption',
    loadChildren: () => import('../../modules/admin_content/assumption/assumption.module').then(m => m.AssumptionModule)
  },
  {
    path: 'attempt',
    loadChildren: () => import('../../modules/admin_content/attempt/attempt.module').then(m => m.AttemptModule)
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
