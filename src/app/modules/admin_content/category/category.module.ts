import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryComponent} from "./category.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import {NgxPaginationModule} from "ngx-pagination";

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: 'add',
    component: CategoryCreateComponent,
  },
  {
    path: 'delete/:id',
    component: CategoryDeleteComponent,
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent
  }
];

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryEditComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class CategoryModule { }
