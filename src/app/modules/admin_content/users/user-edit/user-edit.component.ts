import {Component, OnInit} from '@angular/core';
import {User} from "../user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {UserToken} from "../user-token";
import {Subscription} from "rxjs";
import {AuthService} from "../../../authentication/service/auth/auth.service";

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

  currentUser: User;
  sub: Subscription;
  currentUserToken: UserToken;
  username = '';
  phone = '';
  gender = '';
  title = '';
  email = '';
  newPassword2: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  });

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private activate: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              ) {
    this.authService.currentUser.subscribe(
      currentUser => {
        this.currentUserToken = currentUser;
      }
    );
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      imageSource: [''],
      username: [''],
      email: [''],
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
          gender: this.user.gender,
          title: this.user.title,
          phone: this.user.phone,
          isDeleted: this.user.isDeleted,
          roles: this.user.roles
        });
        console.log(result);
      });
    });
    this.getUserProfile();
  }

  getUserProfile() {
    this.sub = this.activate.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getUserProfileBy(id);
    });
  }

  private getUserProfileBy(id: string) {
    this.userService.getUserById(id).subscribe(value => {
      this.currentUser = value;
      this.username = value.username;
      this.title = value.gender;
      this.phone = value.phone;
      this.email = value.email;
    }, () => {
      console.log('Lỗi!');
    });
  }
  changePassword() {
    const user = this.setNewUser();
    this.userService.changePassword(user, this.currentUser.id).subscribe(() => {
      alert('Đổi mật khẩu thành công');
      this.newPassword2.reset();
    }, err => {
      console.log(err);
    });
  }

  private setNewUser() {
    const user: User = {
      username: this.currentUserToken.username,
      password: this.newPassword2.value.password,
      confirmPassword: this.newPassword2.value.confirmPassword,
      title: this.title,
      email: this.email,
      phone: this.phone,
      gender: this.gender
    };
    return user;
  }

  // tslint:disable-next-line:typedef
  update() {
    if (!this.userForm.invalid) {
      const role = {
        roleId: this.userForm.value.roles
      };
      console.log(this.userForm.value.roles);
      const roles = [];
      roles.push(role);
      this.user.imageSource = this.userForm.value.imageSource;
      this.user.username = this.userForm.value.username;
      this.user.email = this.userForm.value.email;
      this.user.gender = this.userForm.value.gender;
      this.user.title = this.userForm.value.title;
      this.user.phone = this.userForm.value.phone;
      this.user.isDeleted = this.userForm.value.isDeleted;
      this.user.roles = roles;
    }
    this.userService.update(this.user).subscribe(result => {
      alert('cập nhập thành công!');
      this.router.navigate(['/admin/users']);
    }, error => {
      console.log(error);
    });
  }
}
