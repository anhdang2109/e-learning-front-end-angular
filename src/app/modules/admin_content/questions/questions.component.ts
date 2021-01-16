import { Component, OnInit } from '@angular/core';
import {QuestionService} from './question.service';
import {Question} from './questions.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  products: Question[];
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getAll().toPromise().then(value => {
      this.products = value;
      console.log(value);
      console.log(this.products);
    });
  }

}
