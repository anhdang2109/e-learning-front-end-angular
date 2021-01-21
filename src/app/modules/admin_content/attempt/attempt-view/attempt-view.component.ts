import { Component, OnInit } from '@angular/core';
import {AttemptService} from '../attempt.service';
import {StudyService} from '../../studies/service/study.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Attempt} from '../attempt.model';
import {Study} from '../../studies/model/study.model';

@Component({
  selector: 'app-attempt-view',
  templateUrl: './attempt-view.component.html',
  styleUrls: ['./attempt-view.component.css']
})
export class AttemptViewComponent implements OnInit {
  idAttempt: number;
  attempt: Attempt;
  constructor(
    private attemptService: AttemptService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idAttempt = params.idAttempt;
      console.log(this.idAttempt);
      this.attemptService.findById(this.idAttempt).toPromise().then(value => {
        console.log(value);
        this.attempt = value;
      });
    });
  }

}
