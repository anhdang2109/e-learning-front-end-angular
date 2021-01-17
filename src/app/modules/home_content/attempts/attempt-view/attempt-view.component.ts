import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
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
    console.log(this.attempt.assumptions[0].userAnswers);
    this.attemptService.update(this.attempt, this.idAttempt ).toPromise().then(value => {
        console.log('Update', value);
      });
    this.router.navigate(['/home/quizzes/' + this.idStudy + '/attempts']);
  }

}
