import { Component, OnInit } from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-assumption',
  templateUrl: './assumption.component.html',
  styleUrls: ['./assumption.component.css']
})
export class AssumptionComponent implements OnInit {

  role: string;
  users: User[];
  currentUsername: string;

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
