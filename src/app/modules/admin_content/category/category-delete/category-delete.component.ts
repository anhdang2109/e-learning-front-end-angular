import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../category.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../category.model";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  category: Category;
  constructor(private router: Router,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder
  ) {}
  categoryForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id');
      console.log(id);
      this.categoryService.getById(id).subscribe(result => {
        this.category = result;
        console.log(result);
      });
    });
    this.category = {
      id: 1,
      name: '',
      description: ''
    };
  }
  // tslint:disable-next-line:typedef
  delete() {
    const book = this.categoryForm.value;
    // @ts-ignore
    this.categoryService.delete(this.category.id, book).toPromise().then(value => {
      if ( value === null) {
        alert("Khong the xoa vi danh muc da duoc gan");
      } else {
        alert("thanh cong");
        this.router.navigate(['/admin/categories']);
      }
    });

  }
}
