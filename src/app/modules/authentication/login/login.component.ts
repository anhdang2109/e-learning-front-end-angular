import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth/auth.service";
import {first} from "rxjs/operators";
import {UserService} from "../../admin_content/users/user.service";
import {User} from "../../admin_content/users/user.model";
import {UserToken} from "../../admin_content/users/user-token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: UserToken;
  user: User = {
    username: '',
    password: ''
  };
  returnUrl = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userSevice: UserService,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(value => this.currentUser = value);
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/home';
  }

  login() {
    this.authService.login(this.user.username, this.user.password)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      });
  }
}
