import {Component, OnInit} from '@angular/core';
import {Study} from "./model/study.model";
import {StudyService} from "./service/study.service";
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  studies: Study[];
  role: string;
  users: User[];
  currentUsername: string;

  constructor(private studyService: StudyService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studyService.getAll().subscribe(data => {
      this.studies = data;
      console.log(data);
    });
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
}
