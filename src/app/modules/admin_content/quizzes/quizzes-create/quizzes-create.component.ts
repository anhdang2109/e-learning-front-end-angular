import { Component, OnInit } from '@angular/core';
import {QuizService} from '../service/quiz.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Quiz} from '../model/quiz.model';
import {Question} from '../../questions/questions.model';
import {QuestionService} from '../../questions/question.service';
import {User} from '../../users/user.model';
import {Category} from '../../category/category.model';
import {CategoryService} from '../../category/category.service';
import {QuestionSearch} from '../../questions/questionSearch.model';

@Component({
  selector: 'app-quizzes-create',
  templateUrl: './quizzes-create.component.html',
  styleUrls: ['./quizzes-create.component.css']
})
export class QuizzesCreateComponent implements OnInit {
  // errorMessage = '';
  quiz: Quiz = {
    quizname: '',
    description: '',
    category: null
  };
  assignedCategory = {
    id: 1,
    name: ''
  };
  questionSearch: QuestionSearch = {
    code: '',
    type: '',
    level: '',
    categoryID: null
  };
  categories: Category[] = [];
  searchString: string;
  questions: Question[] = [];
  searchPool: Question[] = [];
  questionPool: Question[] = [];
  constructor(private quizService: QuizService,
              private questionService: QuestionService,
              private categoryService: CategoryService,
              private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.questionService.getAll().toPromise().then(value => {
      this.questions = value;
      console.log(value);
      console.log(this.questions);
    });
    this.categoryService.getAll().toPromise().then(value => {
      this.categories = value;
      console.log(value);
      console.log(this.categories);
    });
  }
  cutString(): string[] {
    const str = this.searchString.split(',');
    console.log(str);
    return str;
  }
  searchQuestion(){
    this.questionService.searchQuestion(this.questionSearch).toPromise().then(value => {
      this.searchPool = value;
      console.log(value);
      console.log(this.searchPool);
    });
  }
  addSearchQuestion(code: string) {
          if (this.checkQuestionAlreadyExisted(code) !== true ){
            this.questionPool.push(this.findQuestion(code));
            this.searchPool.splice(this.findIndexQuestion(code, this.searchPool), 1);
          }
          else {
            alert("ma cau hoi " + code + " da dc them ");
          }
  }
  addQuestion(){
    if (this.cutString() !== []){
      const str = this.cutString();
      for (let i = 0; i < str.length ; i++) {
        if (this.findQuestion(str[i]) != null){
          if (this.checkQuestionAlreadyExisted(str[i]) !== true ){
            this.questionPool.push(this.findQuestion(str[i]));
          }
          else {
            alert("ma cau hoi " + str[i] + " da dc them ");
          }
        }
        else {
          alert("Không tìm thấy mã câu hỏi " + str[i]);
        }
      }
    }
    else {
      alert("Vui lòng nhập văn bản bạn muốn tìm kiếm");
    }
  }
  findQuestion(code: string): Question{
      for (const question of this.questions) {
        if (question.code === code){
          return question;
        }
      }
      return null;
  }
  findIndexQuestion(code: string, pool: Question[]){
    for (let i = 0; i < pool.length; i++) {
      if ( pool[i].code === code){
        return i;
      }
    }
    return  null;
  }
  checkQuestionAlreadyExisted(code: string): boolean {
    for (const question of this.questionPool) {
      if (question.code === code){
        return true;
      }
    }
    return false;
  }
  removeQuestion(code: string): void {
    if (this.findIndexQuestion(code, this.questionPool) !== null) {
      this.questionPool.splice(this.findIndexQuestion(code, this.questionPool), 1);
    }
    else {
      alert("không thể tìm thấy câu hỏi");
    }
  }
  create() {
    this.quiz.questions = this.questionPool;
    this.quiz.category = this.assignedCategory;
    console.log(this.quiz);
    this.quizService.save(this.quiz).subscribe(() => {
      alert('Thành công');
      this.router.navigate(['/admin/quizzes']);
    });
  }
}
