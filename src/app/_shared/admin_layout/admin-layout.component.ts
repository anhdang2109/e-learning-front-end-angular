import { Component, OnInit } from '@angular/core';
import {User} from "../../modules/admin_content/users/user.model";
import {UserService} from "../../modules/admin_content/users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  role: string;
  users: User[];
  currentUsername: string;

  constructor(private userService: UserService,
              private router: Router
  ) {
  }
  ngOnInit() {
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER" || this.role == null) {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
}
