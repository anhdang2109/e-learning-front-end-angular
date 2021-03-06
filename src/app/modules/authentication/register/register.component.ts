import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../../admin_content/users/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  successMessage = '';
  failMessage = '';
  // @ts-ignore
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    // confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    title: new FormControl('', [Validators.required]),
    imageSource: new FormControl(''),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    let user = this.setNewUser();
    this.authService.register(user).subscribe(() => {
      console.log('Đăng ký thành công');
      this.registerForm.reset();
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
    });
    console.log(user);
  }

  private setNewUser() {
    const user: User = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      // confirmPassword: this.registerForm.value.confirmPassword,
      imageSource: this.registerForm.value.imageSource,
      title: this.registerForm.value.title,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      gender: this.registerForm.value.gender
    };
    return user;
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get username() {
    return this.registerForm.get('username');
  }
  get password() {
    return this.registerForm.get('password');
  }

}
