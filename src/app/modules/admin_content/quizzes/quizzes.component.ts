import {Component, OnInit} from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/service/auth/auth.service";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  role: string;
  users: User[];
  currentUsername: string;

  constructor(private userService: UserService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    this.role = localStorage.getItem("ROLE");
    if (this.role == "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
}
