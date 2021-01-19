import { Component, OnInit } from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";
import {Category} from "./category.model";
import {CategoryService} from "./category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  role: string;
  category: Category[];
  currentUsername: string;
  listCategory: Category[] | undefined;
  constructor(private userService: UserService,
              private router: Router,
              private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe(data => {
      this.listCategory = data;
      console.log(data);
    });
  }
}
