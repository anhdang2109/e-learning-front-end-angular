import {Component, OnInit} from '@angular/core';
import {Role} from "../admin_content/users/role";
import {Router} from "@angular/router";
import {UserService} from "../admin_content/users/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
