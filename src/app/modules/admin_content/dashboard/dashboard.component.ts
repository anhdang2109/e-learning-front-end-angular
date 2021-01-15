import { Component, OnInit } from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  role: string;
  users: User[];
  currentUsername: string;

  constructor(private userService: UserService,
              private router: Router
              ) {
  }

  ngOnInit() {
    this.role = localStorage.getItem("ROLE");
    if (this.role == "ROLE_USER") {
      alert("Bạn không có quyền!")
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");

  }
}
