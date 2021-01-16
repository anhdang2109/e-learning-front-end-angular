import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryImportComponent} from "./category-import/category-import.component";
import {CategoryViewComponent} from "./category-view/category-view.component";
import {CategoryComponent} from "./category.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: 'add',
    component: CategoryCreateComponent
  },
  {
    path: 'view',
    component: CategoryViewComponent
  },
  {
    path: 'import',
    component: CategoryImportComponent
  }
];

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
    CategoryImportComponent,
    CategoryViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class CategoryModule { }
