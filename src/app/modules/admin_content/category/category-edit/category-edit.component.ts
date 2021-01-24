import { Component, OnInit } from '@angular/core';
import {Category} from "../category.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../category.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  errorMessage = '';

  category: Category;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
  ) {
  }

  // @ts-ignore
  categoryForm: FormGroup;

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(4)]],

    });
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      this.categoryService.getById(id).subscribe(result => {
        this.category = result;
        console.log(result);
        this.categoryForm.setValue({
          name: result.name,
          description: result.description,
        });
      });
    });
  }
  // tslint:disable-next-line:typedef
  update() {
    console.log(this.categoryForm);
    console.log(this.categoryForm.invalid);
    // if (!this.categoryForm.invalid){
    this.category.name = this.categoryForm.value.name;
    this.category.description = this.categoryForm.value.description;
    this.categoryService.update(this.category).subscribe(() => {
        this.router.navigate(['/admin/categories']);
        alert('cap nhat thanh cong');
      }, error => alert('loi'));
    // }
  }
  get name(){
    return this.categoryForm.get('name');
  }
  get description(){
    return this.categoryForm.get('description');
  }
}
