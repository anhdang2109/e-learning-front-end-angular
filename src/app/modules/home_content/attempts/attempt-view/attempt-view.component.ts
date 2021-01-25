import {Component, OnInit} from '@angular/core';
import {AttemptService} from '../../../admin_content/attempt/attempt.service';
import {Attempt} from '../../../admin_content/attempt/attempt.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-attempt-view',
  templateUrl: './attempt-view.component.html',
  styleUrls: ['./attempt-view.component.css']
})
export class AttemptViewComponent implements OnInit {
  idAttempt: number;
  idStudy: number;
  attempt: Attempt = {
    name: '',
    status: '',
    averageScore: 0,
    assumptions: []
  };

  constructor(
    private attemptService: AttemptService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.params.subscribe(params => {
      this.idAttempt = params.idAttempt;
      this.idStudy = params.idStudy;
      this.attemptService.findById(this.idAttempt).toPromise().then(value => {
        console.log(value);
        this.attempt = value;
        console.log(this.attempt);
      });
    });
  }

  onUpdate() {
    for (const assumption of this.attempt.assumptions) {
      if (assumption.question.type === 'single-choice' || assumption.question.type === 'true-false') {
        if (assumption.guessNumber != null) {
          assumption.userAnswers[assumption.guessNumber].correctAnswer = true;
        }
      }
      if (assumption.question.type === 'input') {
        if (assumption.userAnswers[0].content === assumption.question.questionAnswers[0].content) {
          assumption.userAnswers[0].correctAnswer = true;
        }
      }
    }
    this.attemptService.update(this.attempt, this.idAttempt).toPromise().then(value => {
      console.log('Update', value);
      alert('Chúc mừng bạn đã hoàn thành bài thi' );
      this.router.navigate(['/home/quizzes/' + this.idStudy + '/attempts']);
    });

  }
}
