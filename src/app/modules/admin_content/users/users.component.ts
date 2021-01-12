import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import {UserService} from './user.service';


@Component(
  {
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  })
export class UsersComponent implements OnInit {
  users: User[] = [];
  USERS: User[] = [];
  page: number = 1;
  pageSize: number = 5;
  collectionSize: number = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result) => {
      this.USERS = result.body;
      this.collectionSize = this.USERS.length;
      this.refreshCountries();
    });
  }

  refreshCountries() {
    this.users = this.USERS.map((user, i) => ({index: i + 1, ...user}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}




