import { Component, OnInit } from '@angular/core';
import {QuizService} from '../service/quiz.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Quiz} from '../model/quiz.model';
import {Question} from '../../questions/questions.model';
import {QuestionService} from '../../questions/question.service';
import {User} from '../../users/user.model';

@Component({
  selector: 'app-quizzes-create',
  templateUrl: './quizzes-create.component.html',
  styleUrls: ['./quizzes-create.component.css']
})
export class QuizzesCreateComponent implements OnInit {
  quiz: Quiz = {
    quizname: '',
    description: ''
  };
  searchString: string;
  questions: Question[] = [];
  questionPool: Question[] = [];
  constructor(private quizService: QuizService,
              private questionService: QuestionService,
              private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.questionService.getAll().toPromise().then(value => {
      this.questions = value;
      console.log(value);
      console.log(this.questions);
    });
  }
  cutString(): string[] {
    const str = this.searchString.split(',');
    console.log(str);
    return str;
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
          alert("khong tim dc cau hoi ma " + str[i]);
        }
      }
    }
    else {
      alert("Pls insert question code");
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
  findIndexQuestion(code: string){
    for (let i = 0; i < this.questionPool.length; i++) {
      if ( this.questionPool[i].code === code){
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
    if (this.findIndexQuestion(code) !== null) {
      this.questionPool.splice(this.findIndexQuestion(code), 1);
    }
    else {
      alert("cant find question");
    }
  }
  create() {
    this.quiz.questions = this.questionPool;
    console.log(this.quiz);
    this.quizService.save(this.quiz).subscribe(() => {
      alert('successfully');
      this.router.navigate(['/admin/quizzes']);
    });
  }
}
