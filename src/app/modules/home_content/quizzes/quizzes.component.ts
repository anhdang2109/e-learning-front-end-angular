import {Component, OnInit} from '@angular/core';
import {User} from "../../admin_content/users/user.model";
import {Category} from "../../admin_content/category/category.model";
import {Quiz} from "../../admin_content/quizzes/model/quiz.model";
import {UserService} from "../../admin_content/users/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/service/auth/auth.service";
import {CategoryService} from "../../admin_content/category/category.service";
import {QuizService} from "../../admin_content/quizzes/service/quiz.service";
import {UserToken} from "../../admin_content/users/user-token";
import {Study} from "../../admin_content/studies/model/study.model";
import {StudyService} from "../../admin_content/studies/service/study.service";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  categories: Category[];
  quizzes: Quiz[];
  studies: Study[];
  currentUser: User;
  idStudy: number;
  countQuiz: any;
  num: any;

  constructor(private router: Router,
              private userService: UserService,
              private categoryService: CategoryService,
              private quizzesService: QuizService,
              private studyService: StudyService,
              private authService: AuthService,
  ) {
  }

  getUserCurrentByName() {
    this.authService.currentUser.subscribe(data => {
      this.userService.getUserByUsername(data.username).subscribe(user => {
        this.currentUser = user;
      });
    });
  }

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

  // getAllStudy(): Study[] {
  //   this.studyService.getAll().subscribe((data: any) => {
  //     this.studies = data;
  //   });
  //   return this.studies;
  // }

  getStudyId(idQuiz: number) {
    return this.studyService.getStudyById(this.currentUser.id, idQuiz).toPromise();
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
    this.getAllCategory();
    this.getAllQuiz();
    // this.getAllStudy();
    console.log("this.currentUser");
    console.log(this.currentUser);
  }
}
