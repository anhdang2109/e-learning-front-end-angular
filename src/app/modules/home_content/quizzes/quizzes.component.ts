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

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  study: Study[];
  currentQuiz: Quiz;

  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private studyService: StudyService,
    private authenticationService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.getCurrentQuiz();
  }

  private getCurrentQuiz() {
    this.authenticationService.currentUser.subscribe(value => {
      this.studyService.findById(value.id + '').subscribe(result => {
        this.currentQuiz = result;
        console.log(result);
      });
    });
  }
}
