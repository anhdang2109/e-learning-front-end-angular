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

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  countries = COUNTRIES;
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
    if (this.role == "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
}
