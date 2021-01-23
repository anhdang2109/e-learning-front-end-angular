import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../../modules/admin_content/users/user-token";
import {AuthService} from "../../../modules/authentication/service/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../../../modules/admin_content/users/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../../modules/admin_content/users/user.model";
import {Attempt} from "../../../modules/admin_content/attempt/attempt.model";
import {Study} from "../../../modules/admin_content/studies/model/study.model";
import {AttemptService} from "../../../modules/admin_content/attempt/attempt.service";
import {StudyService} from "../../../modules/admin_content/studies/service/study.service";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  // currentUser: UserToken;

  user: Observable<any>;
  idStudy: number;
  study: Study;
  userFromDB: User = {};
  currentUser: User = {};
  role: string;
  currentUsername: string;

  constructor(private authService: AuthService,
              private attemptService: AttemptService,
              private studyService: StudyService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.authService.currentUserSubject.subscribe(value => {
      this.currentUser = value;
      if (this.currentUser) {
      }
    });

    this.authService.currentUserSubjectFromDB.subscribe(value => {
      this.userFromDB = value;
    });
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.userService.getUserByUsername(x.username).subscribe(value1 => {
        this.user = value1;
      });
      console.log(this.currentUser);
    });

    this.role = localStorage.getItem("ROLE");
    if (this.role == "ROLE_USER") {
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
    console.log()
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/home/index']);
  }
}
