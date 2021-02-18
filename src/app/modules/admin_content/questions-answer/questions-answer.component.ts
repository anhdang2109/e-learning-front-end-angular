import {Component, OnInit} from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions-answer',
  templateUrl: './questions-answer.component.html',
  styleUrls: ['./questions-answer.component.css']
})
export class QuestionsAnswerComponent implements OnInit {


  users: User[];
  role: string;
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
