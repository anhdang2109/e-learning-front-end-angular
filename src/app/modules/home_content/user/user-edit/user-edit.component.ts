import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../../admin_content/users/user-token";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../admin_content/users/user.service";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import {AuthService} from "../../../authentication/service/auth/auth.service";
import {User} from "../../../admin_content/users/user.model";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id: number = 0;
  // @ts-ignore
  user: UserToken;
  // @ts-ignore
  FormUser: FormGroup = new FormGroup({});
  userProfile: User = {};
  userId = this.authService.currentUserValue.id;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private activate: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    this.getCurrentUser();
  }

  ngOnInit(): void {
    // this.FormUser = this.fb.group({
    //   // imageSource: [''],
    //   username: [''],
    //   email: [''],
    //   password: [''],
    //   gender: [''],
    //   title: [''],
    //   phone: [''],
    // });
    // this.activate.paramMap.subscribe((params: ParamMap) => {
    //   this.id = +params.get('id');
      // this.userService.getUserById(this.id).subscribe(result => {
      //   this.user = result;
      // });
    // });
  }

  getCurrentUser() {
    // @ts-ignore
    this.userService.getUserById(34).subscribe(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.authService.currentUserSubjectFromDB.next(data);
      this.user = data;
      this.FormUser = new FormGroup({
        username: new FormControl(this.user.username, Validators.required),
        email: new FormControl(this.user.email, [Validators.required]),
        gender: new FormControl(this.user.gender, [Validators.required]),
        phone: new FormControl(this.user.phone, [Validators.required]),
        title: new FormControl(this.user.title, Validators.required),
      });
    });
  }

  updateUserProfile() {
    this.userService.update(this.userProfile).toPromise();
  }

  updateUser() {
    this.userProfile = {
      id: this.user.id,
      username: this.FormUser.value.username === '' ? this.user.username : this.FormUser.value.username,
      email: this.FormUser.value.email === '' ? this.user.email : this.FormUser.value.email,
      phone: this.FormUser.value.phone === '' ? this.user.phone : this.FormUser.value.phone,
      gender: this.FormUser.value.gender === '' ? this.user.gender : this.FormUser.value.gender,
      title: this.FormUser.value.title === '' ? this.user.title : this.FormUser.value.title
    };
    this.router.navigate(["/home/user"]);
    // @ts-ignore
    this.updateUserProfile();
    alert('Thành công!');
    this.router.navigate(['/home/user']);
  }

  // tslint:disable-next-line:typedef
  // updateUser() {
  //   if (!this.FormUser.invalid) {
  //     // this.user.imageSource = this.FormUser.value.imageSource;
  //     this.user.username = this.FormUser.value.username;
  //     this.user.email = this.FormUser.value.email;
  //     // this.user.password = this.FormUser.value.password;
  //     this.user.gender = this.FormUser.value.gender;
  //     this.user.title = this.FormUser.value.title;
  //     this.user.phone = this.FormUser.value.phone;
  //   }
  //   this.userService.update(this.user).subscribe(result => {
  //     alert('cập nhập thành công!');
  //     this.router.navigate(['/home/index']);
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
