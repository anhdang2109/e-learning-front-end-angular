import {Component, OnInit} from '@angular/core';
import {User} from "../../admin_content/users/user.model";
import {Category} from "../../admin_content/category/category.model";
import {Quiz} from "../../admin_content/quizzes/model/quiz.model";
import {UserService} from "../../admin_content/users/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/service/auth/auth.service";
import {CategoryService} from "../../admin_content/category/category.service";
import {QuizService} from "../../admin_content/quizzes/service/quiz.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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

  getAllCategory() {
    this.categoryService.getAll().subscribe(next => {
      this.listCategory = next;
    });
  }

  getAllQuiz(): Quiz[] {
    this.qizzesService.getAll().subscribe((data: any) => {
      this.listQuiz = data;
    }, error => {
      console.log('Loi!');
    });
    return this.listQuiz;
  }


  // private getCurrentUser() {
  //   this.authService.currentUser.subscribe(value => {
  //     this.userService.getUserById(value.id + '').subscribe(result => {
  //       this.currentUser = result;
  //     });
  //   });
  // }

  ngOnInit() {
    this.getAllCategory();
    // this.getCurrentUser();
    this.getAllQuiz();
    this.newQ = this.fb.group({
        quizname: [''],
        description: [''],
        randomNumber: ['']
      }
    );

  }
}
