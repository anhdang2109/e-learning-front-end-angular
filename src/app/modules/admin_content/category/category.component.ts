import { Component, OnInit } from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";
import {Category} from "./category.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  role: string;
  users: User[];
  currentUsername: string;
  // listBook: Category[] | undefined;
  // constructor(private categotyService: Category) { }// dung de hung du lieu
  //
  constructor(private userService: UserService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
}
