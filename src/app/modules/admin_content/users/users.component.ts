import {Component, OnInit} from '@angular/core';
import {User} from "./user.model";
import {UserService} from "./user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component(
  {
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  })
export class UsersComponent implements OnInit {
  user: User[];
  newU: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder) {
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
  }

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



