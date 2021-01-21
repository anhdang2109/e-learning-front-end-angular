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
  listCategory: Category[];
  listQuiz: Quiz[];
  currentUser: User;
  newQ: FormGroup;
  categories: Category[];
  quizzes: Quiz[];
  studies: Study[];
  userPresent: UserToken;
  currentUser: User;
  idStudy: number;
  countQuiz: any;
  num: any;

  currentUser: UserToken;
  user: Observable<any>;
  idStudy: number;
  study: Study;

  constructor(private authService: AuthService,
              private attemptService: AttemptService,
              private studyService: StudyService,
              private userService: UserService,
  constructor(private router: Router,
              private userService: UserService,
              private categoryService: CategoryService,
              private quizzesService: QuizService,
              private studyService: StudyService,
              private authService: AuthService,
  ) {
  }
  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.userService.getUserByUsername(x.username).subscribe(value1 => {
        this.user = value1;

  getUserCurrentByName() {
    this.authService.currentUser.subscribe(data => {
      this.userService.getUserByUsername(data.username).subscribe(user => {
        this.currentUser = user;
      });
      console.log(this.currentUser);
    });
  }

  // private getCurrentUserById() {
  //   this.authService.currentUser.subscribe(value => {
  //     this.userService.getUserById(value.id + '').subscribe(result => {
  //       this.currentUser = result;
  //     });
  //   });
  // }

  getAllCategory() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
    return this.categories;
  }

  getAllQuiz(): Quiz[] {
    this.quizzesService.getAll().subscribe((data: any) => {
      this.quizzes = data;
      this.quizzes.map(async quiz => {
        let data = await this.getStudyId(quiz.id);
        if (data == null) {
          data = 0;
        }
        quiz.studyId = data;
      })
    });
    return this.quizzes;
  }

  getAllStudy(): Study[] {
    this.studyService.getAll().subscribe((data: any) => {
      this.studies = data;
    });
    return this.studies;
  }

  getStudyId(idQuiz: number) {
    return this.studyService.getStudyById(this.currentUser.id, idQuiz).toPromise();
  }

  async goToAttempt(idQuiz) {

  }



  // getSizeOfCategory(id: any) {
  //   this.quizzesService.countQuizByCategory(id).subscribe(data => {
  //     this.num = data;
  //   });
  //   if (this.num == null) { this.num = 0; }
  //   return this.num;
  // }



  ngOnInit() {
    this.getUserCurrentByName();
    // this.getCurrentUserById();
    this.getAllCategory();
    this.getAllQuiz();
    this.getAllStudy();

    // console.log(this.categories);

    // for (let i = 0; i < this.categories.length; i++) {
    //   this.countQuiz[i] = this.getSizeOfCategory(this.categories[1].id);
    //   console.log(this.countQuiz[1]);
    //   console.log(this.categories[1].id);
    // }
    // console.log(this.countQuiz);

    // this.studyService.getStudyById(33, 7).subscribe(data => {
    //   this.idStudy = data;
    // });
    // console.log(this.idStudy);


    // console.log(this.studyService.getStudyById(33, 7));
    // console.log(this.studies);
  }
}
