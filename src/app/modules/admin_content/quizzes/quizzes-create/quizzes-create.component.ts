import { Component, OnInit } from '@angular/core';
import {QuizService} from '../service/quiz.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Quiz} from '../model/quiz.model';

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
  constructor(private quizService: QuizService,
              private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }
  create() {
    console.log(this.quiz);
    this.quizService.save(this.quiz).subscribe(() => {
      alert('successfully');
      this.router.navigate(['/admin/quizzes']);
    });
  }
}
