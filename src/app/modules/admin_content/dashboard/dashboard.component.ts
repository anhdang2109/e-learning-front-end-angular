import { Component, OnInit } from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {AttemptService} from '../attempt/attempt.service';
import {Attempt} from '../attempt/attempt.model';
import {Question} from '../questions/questions.model';
import {QuestionService} from '../questions/question.service';
import {QuizService} from '../quizzes/service/quiz.service';
import {Quiz} from '../quizzes/model/quiz.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  role: string;
  users: User[];
  attempts: Attempt[];
  questions: Question[];
  quizzes: Quiz[];
  currentUsername: string;

  constructor(private userService: UserService,
              private attemptService: AttemptService,
              private questionService: QuestionService,
              private quizService: QuizService,
              private router: Router
              ) {
  }

  ngOnInit() {
    this.attemptService.getAll().subscribe(data => {
      this.attempts = data;
      console.log(data);
    });
    this.questionService.getAll().toPromise().then(value => {
      this.questions = value;
      console.log(value);
      console.log(this.questions);
    });
    this.userService.getAllUser().toPromise().then(value => {
      this.users = value;
      console.log(value);
      console.log(this.users);
    });
    this.quizService.getAll().toPromise().then(value => {
      this.quizzes = value;
      console.log(value);
      console.log(this.quizzes);
    });
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
}
