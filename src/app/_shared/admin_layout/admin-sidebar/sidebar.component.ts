import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../modules/authentication/service/auth/auth.service";
import {Router} from "@angular/router";
import {UserToken} from "../../../modules/admin_content/users/user-token";
import {Observable} from "rxjs";
import {UserService} from "../../../modules/admin_content/users/user.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
