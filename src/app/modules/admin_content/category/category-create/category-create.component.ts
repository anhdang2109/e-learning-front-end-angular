import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Category} from "../category.model";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  newCategoryForm: FormGroup;
  constructor(
    private router: Router,
    private user: Category,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newCategoryForm = this.fb.group( {
      id: [null],
      name: [null],
      description: [null],
    });
  }
  // creatNewCategory() {
  //   const newU: Category = this.newCategoryForm.value;
  //   this.user.create(newU).subscribe( () => {
  //     this.router.navigate(['']);
  //     alert('tao moi thanh cong');
  //   });
  // }

}
