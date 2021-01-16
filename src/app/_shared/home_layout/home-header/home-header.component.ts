import { Component, OnInit } from '@angular/core';
import {UserToken} from "../../../modules/admin_content/users/user-token";
import {AuthService} from "../../../modules/authentication/service/auth/auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../../../modules/admin_content/users/user.service";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  currentUser: UserToken;
  user: Observable<any>;
  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.userService.getUserByUsername(x.username).subscribe(value1 => {
        this.user = value1;
      });
      console.log(this.currentUser);
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/home/index']);
  }
}
