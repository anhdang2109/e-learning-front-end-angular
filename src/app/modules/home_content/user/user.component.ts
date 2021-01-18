import { Component, OnInit } from '@angular/core';
import {UserToken} from "../../admin_content/users/user-token";
import {Observable} from "rxjs";
import {AuthService} from "../../authentication/service/auth/auth.service";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../admin_content/users/user.service";
import {Router} from "@angular/router";
import {User} from "../../admin_content/users/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: UserToken;
  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.userService.getUserByUsername(x.username).subscribe(value1 => {
        console.log("Value: ");
        console.log(value1);
        this.currentUser = value1;
      }, error => {
        console.log(error);
      });
    });
  }
}
