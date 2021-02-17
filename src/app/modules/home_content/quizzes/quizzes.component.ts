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
import {Observable} from "rxjs";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  categories: Category[] = [];
  categoryPool: Category[] = [];
  quizzes: Quiz[] = [];
  studies: Study[] = [];
  studyPool: Study[] = [];
  studyView: Study[] = [];
  quizzesById: Quiz[] = [];
  // idStudy: number;
  userId: number;
  countQuiz: any = null;
  num: any;
  p: number = 1;

  constructor(private router: Router,
              private userService: UserService,
              private categoryService: CategoryService,
              private quizzesService: QuizService,
              private studyService: StudyService,
  ) {
  }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user')).id;

    this.studyService.getAll().subscribe( data => {
      this.studies = data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.studies.length; i++) {
        if ( this.studies[i].userID === this.userId){
          this.studyPool.push(this.studies[i]);
          const index = this.categoryPool.push(this.studies[i].quiz.category);
          console.log(index - 1 );
          this.categoryPool[index - 1 ].study = this.studies[i];
          console.log(this.categoryPool);
        }
      }
      this.categoryService.getAll().subscribe(data1 => {
        this.categories = data1;
        console.log(this.categories);
        for (const category of this.categories) {
          category.studies = [];
          for (const categoryPool of this.categoryPool) {
            if ( categoryPool.study.quiz.category.id === category.id) {
              category.studies.push(categoryPool.study);
            }
          }
        }
        this.studyView = this.studyPool;
        console.log('studyPool');
        console.log(this.categoryPool);
        console.log(this.categories);
      });
    });
    // this.getAllCategory();
    // this.addStudyId();
  }

  // getAllCategory() {
  //   this.categoryService.getAll().subscribe(data => {
  //     this.categories = data;
  //     for (let i = 0; i < this.categories.length; i++) {
  //       if ( this.studies[i].userID === this.userId){
  //         this.studyPool.push(this.studies[i]);
  //       }
  //     }
  //   });
  //   return this.categories;
  // }

  // addStudyId() {
  //   this.quizzesService.getAll().subscribe((res: any) => {
  //     this.quizzes = res.map(async quiz => {
  //       let data = await this.getStudyId(quiz.id);
  //       quiz.studyId = data? data:0;
  //     })
  //     this.quizzes = res;
  //     this.quizzesById = res;
  //   });
  // }

  // getStudyId(idQuiz: number) {
  //   return this.studyService.getStudyById(this.userId, idQuiz).toPromise();
  // }

  getAllStudies() {
    this.studyView = this.studyPool;
  }
  getStudies(id: number){
    console.log(id);
    this.studyView = [];
    for (const study of this.studyPool) {
      if ( study.quiz.category.id === id) {
        this.studyView.push(study);
      }
    }
  }

  // async getQuizzesById(id?: number) {
  //   if (id == null) {
  //     this.quizzesById = this.quizzes;
  //   } else {
  //     const category = this.getCategoryById(id);
  //     this.quizzesById = category.quizzes;
  //   }
  // }
  //
  // getCategoryById(id: number): Category {
  //   for (const category of this.categories) {
  //     if (category.id === id) {
  //       return category;
  //       break;
  //     }
  //   }
  // }
}
