import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Category} from "../category.model";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  newCategoryForm: FormGroup;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newCategoryForm = this.fb.group( {
      id: [null],
      name: [null],
      description: [null],
    });
  }
  creatNewCategory() {
    const newU: Category = this.newCategoryForm.value;
    this.categoryService.create(newU).subscribe( () => {
      console.log(this.newCategoryForm.value);
      this.router.navigate(['/admin/categories']);
      alert('tao moi thanh cong');
    });
  }

}
