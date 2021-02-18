import { Component, OnInit } from '@angular/core';
import {User} from "../user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-deleted',
  templateUrl: './users-deleted.component.html',
  styleUrls: ['./users-deleted.component.css']
})
export class UsersDeletedComponent implements OnInit {

  user1: User[];
  userDeleted: User[];
  newU: FormGroup;
  role: string;
  currentUsername: string;
  p: number = 1;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUserDeleted();
    this.newU = this.fb.group({
        imageSource: [''],
        username: [''],
        email: [''],
        password: [''],
        gender: [''],
        title: [''],
        phone: [''],
        isDeleted: [''],
        createdAt: [''],
        updatedAt: ['']
      }
    );
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER" || this.role == null) {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }

  getAllUserDeleted(): User[] {
    this.userService.getAllUserDeleted().subscribe((data: any) => {
      this.user1 = data;
    });
    return this.user1;
  }


  deleted(id: any) {
    if (confirm('Bạn đã chắc chắn?')) {
      this.userService.deleted(id).subscribe(value => {
        this.getAllUserDeleted();
      });
    }
  }

}
