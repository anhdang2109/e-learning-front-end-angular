import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../question.service';
import {Question} from '../questions.model';

@Component({
  selector: 'app-questions-view',
  templateUrl: './questions-view.component.html',
  styleUrls: ['./questions-view.component.css']
})
export class QuestionsViewComponent implements OnInit {
  idQuestion: number;
  question: Question;
  constructor(
    private questionService: QuestionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idQuestion = params.idQuestion;
      console.log(this.idQuestion);
      this.questionService.findById(this.idQuestion).toPromise().then(value => {
        console.log(value);
        this.question = value;
      });
    });
  }

}
