import { Component, OnInit } from '@angular/core';
import {Study} from "../model/study.model";
import {StudyService} from "../service/study.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-study-view',
  templateUrl: './study-view.component.html',
  styleUrls: ['./study-view.component.css']
})
export class StudyViewComponent implements OnInit {
  study: Study;
  role: string;
  currentUsername: string;
  constructor(
    private studyService: StudyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER" || this.role == null) {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }

}
