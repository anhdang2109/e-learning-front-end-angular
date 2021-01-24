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

  categories: Category[];
  quizzes: Quiz[] = [];
  studies: Study[] = [];
  studyPool: Study[] = [];
  quizzesById: Quiz[] = [];
  idStudy: number;
  userId: number;
  countQuiz: any = null;
  num: any;

  constructor(private router: Router,
              private userService: UserService,
              private categoryService: CategoryService,
              private quizzesService: QuizService,
              private studyService: StudyService,
  ) {
  }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user')).id;
    this.getStudies();
    this.getAllCategory();
    this.addStudyId();
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
    return this.categories;
  }

  addStudyId() {
    this.quizzesService.getAll().subscribe((res: any) => {
      this.quizzes = res.map(async quiz => {
        let data = await this.getStudyId(quiz.id);
        quiz.studyId = data? data:0;
      })
      this.quizzes = res;
      this.quizzesById = res;
    });
  }

  getStudyId(idQuiz: number) {
    return this.studyService.getStudyById(this.userId, idQuiz).toPromise();
  }

  async getQuizzesById(id?: number) {
    if (id == null) {
      this.quizzesById = this.quizzes;
    } else {
      let category = this.getCategoryById(id);
      this.quizzesById = category.quizzes;
    }
  }

  getCategoryById(id: number): Category {
    for (let category of this.categories) {
      if (category.id == id) {
        return category;
        break;
      }
    }
  }

  getStudies() {
    this.studyService.getAll().subscribe( data => {
      this.studies = data;
      for (let i = 0; i < this.studies.length; i++) {
        if(this.studies[i].userID == this.userId){
          this.studyPool.push(this.studies[i]);
        }
      }
    });
  }
}
