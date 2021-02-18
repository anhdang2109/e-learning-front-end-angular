import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Category} from "../category.model";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  errorMessage = '';
  newCategoryForm: FormGroup;
  role: string;
  currentUsername: string;
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newCategoryForm = this.fb.group( {
      id: [null],
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),


      // name: [null],
      // description: [null],
    });
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER" || this.role == null) {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
  creatNewCategory() {
    const newU: Category = this.newCategoryForm.value;
    this.categoryService.create(newU).subscribe( () => {
      console.log(this.newCategoryForm.value);
      this.router.navigate(['/admin/categories']);
      alert('Thành công');
    });
  }
  get name(){
    return this.newCategoryForm.get('name');
  }
  get description(){
    return this.newCategoryForm.get('description');
  }

}
