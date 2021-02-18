import { Component, OnInit } from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";
import {AttemptService} from './attempt.service';
import {Attempt} from './attempt.model';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {
  attempts: Attempt[];
  role: string;
  users: User[];
  currentUsername: string;
  p: number = 1;

  constructor(private attemptService: AttemptService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.attemptService.getAll().subscribe(data => {
      this.attempts = data;
      console.log(data);
    });
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER" || this.role == null) {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
}
