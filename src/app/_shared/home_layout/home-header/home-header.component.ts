import { Component, OnInit } from '@angular/core';
import {UserToken} from "../../../modules/admin_content/users/user-token";
import {AuthService} from "../../../modules/authentication/service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  currentUser: UserToken;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
      console.log(this.currentUser);
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/home/index']);
  }
}
