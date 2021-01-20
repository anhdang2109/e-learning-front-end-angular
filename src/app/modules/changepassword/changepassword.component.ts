import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthService} from "../authentication/service/auth/auth.service";
import {UserService} from "../admin_content/users/user.service";
import {User} from "../admin_content/users/user.model";
import {UserToken} from "../admin_content/users/user-token";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  // // @ts-ignore
  // userId: number = this.authService.currentUserValue.id;
  // currentUser: User = {};
  // myForm: FormGroup;
  // notExist: string = '';
  // notMinLength: string = '';
  // constructor(private formBuilder: FormBuilder,
  //             private activatedRoute: ActivatedRoute,
  //             private router: Router,
  //             private authService: AuthService,
  //             private userService: UserService) {
  //   this.myForm = this.formBuilder.group({
  //     password: ['', [Validators.required]],
  //     newPassword: ['', [Validators.required]],
  //     confirmPassword: ['']
  //   }, {validator: this.checkPasswords});
  //   this.getCurrentUser();
  // }
  // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  //   let pass = group.controls.newPassword.value;
  //   let confirmPass = group.controls.confirmPassword.value;
  //   return pass === confirmPass ? null : {notSame: true};
  // }
  // ngOnInit() {
  // }
  // changePassword() {
  //   console.log(this.currentUser);
  //   if (this.myForm.invalid) {
  //     return;
  //   }
  //   if (this.myForm.controls.newPassword.value.length < 6) {
  //     this.notMinLength = 'Mật khẩu mới phải có tối thiểu 6 ki tự';
  //     return;
  //   }
  //   if (this.myForm.controls.newPassword.value !== this.currentUser.password) {
  //     this.notExist = 'Wrong password!';
  //     return;
  //   }
  //   this.currentUser.password = this.myForm.controls.newPassword.value;
  //   this.userService.changePassword(this.currentUser).subscribe(() => {
  //     alert('Đổi mật khẩu thành công!');
  //     this.router.navigate(['/home/user']);
  //   }, error => {
  //     console.log("lỗi!");
  //     console.log(error);
  //   });
  // }
  // getCurrentUser() {
  //   this.userService.getUserById(this.userId).subscribe(data => {
  //     this.currentUser = data;
  //   });
  // }

  currentUser: User;
  sub: Subscription;
  currentUserToken: UserToken;
  username = '';
  phone = '';
  gender = '';
  title = '';
  email = '';
  newPassword: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  });

  constructor(private userService: UserService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
    this.authService.currentUser.subscribe(
      currentUser => {
        this.currentUserToken = currentUser;
      }
    );
  }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.getUserProfileById(id);
    });
  }

  private getUserProfileById(id: string) {
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
      this.newPassword.reset();
      this.router.navigate(['/home/user']);
    }, err => {
      console.log(err);
    });
  }

  private setNewUser() {
    const user: User = {
      username: this.currentUserToken.username,
      password: this.newPassword.value.password,
      confirmPassword: this.newPassword.value.confirmPassword,
      title: this.title,
      email: this.email,
      phone: this.phone,
      gender: this.gender
    };
    return user;
  }


}
