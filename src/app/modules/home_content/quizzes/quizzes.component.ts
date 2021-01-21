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
  listCategory: Category[];
  listQuiz: Quiz[];
  currentUser: User;
  newQ: FormGroup;

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService,
              private categoryService: CategoryService,
              private  qizzesService: QuizService,
              private fb: FormBuilder
  ) {
  }
  ngOnInit(): void {
    // this.authenticationService.currentQuiz.subscribe(x => {
    //   this.currentQuiz = x;
    //   console.log(x);
    //   this.quizService.findById(x.id).subscribe(value1 => {
    //     this.study = value1;
    //     console.log(value1);
    //   });
    // });
  }

  // getAllCategory() {
  //   this.categoryService.getAll().subscribe(next => {
  //     this.listCategory = next;
  //   });
  // }

  getAllQuiz(): Quiz[] {
    this.qizzesService.getAll().subscribe((data: any) => {
      this.listQuiz = data;
    }, error => {
      console.log('Loi!');
    });
    return this.listQuiz;
  }

}
