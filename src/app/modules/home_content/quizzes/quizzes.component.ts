import {Component, OnInit} from '@angular/core';
import {User} from "../../admin_content/users/user.model";
import {Category} from "../../admin_content/category/category.model";
import {Quiz} from "../../admin_content/quizzes/model/quiz.model";
import {UserService} from "../../admin_content/users/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../authentication/service/auth/auth.service";
import {CategoryService} from "../../admin_content/category/category.service";
import {QuizService} from "../../admin_content/quizzes/service/quiz.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Study} from "../../admin_content/studies/model/study.model";
import {StudyService} from "../../admin_content/studies/service/study.service";
import {Attempt} from "../../admin_content/attempt/attempt.model";
import {AttemptService} from "../../admin_content/attempt/attempt.service";
import {UserToken} from "../../admin_content/users/user-token";
import {Observable} from "rxjs";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  currentUser: UserToken;
  user: Observable<any>;
  idStudy: number;
  study: Study;

  constructor(private authService: AuthService,
              private attemptService: AttemptService,
              private studyService: StudyService,
              private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.userService.getUserByUsername(x.username).subscribe(value1 => {
        this.user = value1;
      });
      console.log(this.currentUser);
    });

  }
}
