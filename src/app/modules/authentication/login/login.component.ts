import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth/auth.service";
import {first} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../admin_content/users/user.service";
import {User} from "../../admin_content/users/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required])
  });

  error = '';
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          localStorage.setItem('ROLE', data.roles[0].authority);
          if ( data.roles.length > 1 ) {
            if ( data.roles[0].authority === 'ROLE_ADMIN' || data.roles[1].authority === 'ROLE_ADMIN' ) {
              localStorage.setItem('ROLE', 'ROLE_ADMIN');
            }
          }
          localStorage.setItem('USERNAME', data.username);
          if (data.roles[0].authority === "ROLE_ADMIN") {
            this.router.navigate(["/admin"]);
          } else {
            this.router.navigate(["/home/index"]);
          }
        },
        error => {
          alert("Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!");
          this.loading = false;
        });
  }
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
