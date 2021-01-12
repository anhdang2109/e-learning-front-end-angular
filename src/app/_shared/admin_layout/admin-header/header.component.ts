import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../modules/admin_content/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    }

  logout(): void {
    this.userService.logout();
    this.router.navigateByUrl('/admin_content/login');
  }
}
