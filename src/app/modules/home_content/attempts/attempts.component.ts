import {Component, OnInit} from '@angular/core';
import {AttemptService} from '../../admin_content/attempt/attempt.service';
import {Attempt} from '../../admin_content/attempt/attempt.model';
import {Study} from '../../admin_content/studies/model/study.model';
import {ActivatedRoute, Router} from '@angular/router';
import {StudyService} from '../../admin_content/studies/service/study.service';


@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {
  idStudy: number;
  attempts: Attempt[];
  study: Study;

  constructor(
    private attemptService: AttemptService,
    private studyService: StudyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idStudy = params.idStudy;
      this.studyService.findById(this.idStudy).toPromise().then(value => {
        console.log(value);
        this.study = value;
        console.log(this.study);
        this.attempts = this.study.attempts;
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  tryAttempt(): void {
    console.log("work");
    this.study.attempts.push();
    console.log(this.study);
    this.studyService.addAttempt(this.study).toPromise().then(value => {
      console.log('Success', value.id);
      const idNewAttempt = value.id;
      this.router.navigate(['/home/quizzes/' + this.idStudy + '/attempts/view/' + idNewAttempt]);
    });
  }
}
