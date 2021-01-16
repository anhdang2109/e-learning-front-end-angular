import { Component, OnInit } from '@angular/core';
import {User} from "../user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserToken} from "../user-token";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: any;
  // @ts-ignore
  user: UserToken;
  // @ts-ignore
  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private activate: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      imageSource: [''],
      username: [''],
      email: [''],
      password: [''],
      gender: [''],
      title: [''],
      phone: [''],
      isDeleted: [''],
      roles: ['']
    });
    this.activate.params.subscribe((params: Params) => {
      this.id = params.id;
      this.userService.getUserById(this.id).subscribe(result => {
        this.user = result;
        this.userForm.patchValue({
          imageSource: this.user.imageSource,
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
          gender: this.user.gender,
          title: this.user.title,
          phone: this.user.phone,
          isDeleted: this.user.isDeleted,
          roles: this.user.roles
        });
        console.log(result);
      });
    });
  }

  // tslint:disable-next-line:typedef
  update() {
    if (!this.userForm.invalid) {
      this.user.imageSource = this.userForm.value.imageSource,
      this.user.username = this.userForm.value.username;
      this.user.email = this.userForm.value.email;
      this.user.password = this.userForm.value.password;
      this.user.gender = this.userForm.value.gender;
      this.user.title = this.userForm.value.title;
      this.user.phone = this.userForm.value.phone;
      this.user.isDeleted = this.userForm.value.isDeleted;
      this.user.roles = this.userForm.value.roles;
    }
    this.userService.update(this.user).subscribe(result => {
      alert('Update successfully');
      this.router.navigate(['/admin/users']);
    }, error => {
      console.log(error);
    });
  }
}
