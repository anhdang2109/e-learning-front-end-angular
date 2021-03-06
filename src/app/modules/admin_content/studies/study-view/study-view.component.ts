import { Component, OnInit } from '@angular/core';
import {Study} from "../model/study.model";
import {StudyService} from "../service/study.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-study-view',
  templateUrl: './study-view.component.html',
  styleUrls: ['./study-view.component.css']
})
export class StudyViewComponent implements OnInit {
  study: Study;
  constructor(
    private studyService: StudyService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      console.log(id);
      this.studyService.findById(id).subscribe(data => {
        console.log(data);
        this.study = data;
      });
    });
  }

}
