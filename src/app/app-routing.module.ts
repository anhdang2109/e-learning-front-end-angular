import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './modules/authentication/login/login.component';
import {AdminLayoutComponent} from './_shared/admin_layout/admin-layout.component';
import {DashboardComponent} from './modules/admin_content/dashboard/dashboard.component';
import {NotFoundComponent} from './modules/errors_content/404/not-found.component';
import {HomeComponent} from "./modules/home_content/home.component";
import {RegisterComponent} from "./modules/authentication/register/register.component";



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./_shared/admin_layout/admin.module').then(m => m.AdminModule)
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
