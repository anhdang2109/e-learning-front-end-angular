import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './modules/authentication/login/login.component';
import {AdminLayoutComponent} from './_shared/admin_layout/admin-layout.component';
import {NotFoundComponent} from './modules/errors_content/404/not-found.component';
import {RegisterComponent} from "./modules/authentication/register/register.component";
import {HomeLayoutComponent} from './_shared/home_layout/home-layout.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    loadChildren: () => import('./_shared/home_layout/home.module').then(m => m.HomeModule)
  },
  {
    path: 'signup',
    component: RegisterComponent
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
