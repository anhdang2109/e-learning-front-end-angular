import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../modules/admin_content/users/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../modules/authentication/service/auth/auth.service";
import {UserToken} from "../../modules/admin_content/users/user-token";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
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
