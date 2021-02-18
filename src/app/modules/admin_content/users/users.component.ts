import {Component, OnInit} from '@angular/core';
import {User} from "./user.model";
import {UserService} from "./user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component(
  {
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  })
export class UsersComponent implements OnInit {
  user: User[];
  userDeleted: User[];
  newU: FormGroup;
  role: string;
  currentUsername: string;
  p = 1;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUser();
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
        updatetAt: ['']
      }
    );
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER" || this.role == null) {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }

  // getAllUserDeleted(): User[] {
  //   this.userService.getAllUserDeleted().subscribe((data: any) => {
  //     this.userDeleted = data;
  //   });
  //   return this.userDeleted;
  // }

  getAllUser(): User[] {
    this.userService.getAllUser().subscribe((data: any) => {
      this.user = data;
    });
    return this.user;
  }

  delete(id: any) {
    if (confirm('Bạn đã chắc chắn?')) {
      this.userService.delete(id).subscribe(value => {
        console.log('Delete', value);
        this.getAllUser();
      });
    }
  }
}



