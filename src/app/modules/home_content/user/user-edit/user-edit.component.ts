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
  // @ts-ignore
  FormUser: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    title: new FormControl('', Validators.required),
  });
  userProfile: User = {};
  userId = this.authService.currentUserValue.id;
  currentUser: User;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private activate: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {
    this.getCurrentUser();
  }

  ngOnInit(): void {

  }

  getCurrentUser() {
    // @ts-ignore
    this.userService.getUserById(this.userId).subscribe(data => {
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.authService.currentUserSubjectFromDB.next(data);
      this.userProfile = data;
      this.FormUser = new FormGroup({
        username: new FormControl(this.userProfile.username, [Validators.required]),
        email: new FormControl(this.userProfile.email, [Validators.required]),
        gender: new FormControl(this.userProfile.gender, [Validators.required]),
        phone: new FormControl(this.userProfile.phone, [Validators.required]),
        title: new FormControl(this.userProfile.title, Validators.required),
      });
    });
  }

  updateUserProfile() {
    this.userService.update(this.userProfile).toPromise();
  }

  updateUser() {
    this.userProfile = {
      id: this.userProfile.id,
      username: this.FormUser.value.username === '' ? this.userProfile.username : this.FormUser.value.username,
      email: this.FormUser.value.email === '' ? this.userProfile.email : this.FormUser.value.email,
      phone: this.FormUser.value.phone === '' ? this.userProfile.phone : this.FormUser.value.phone,
      gender: this.FormUser.value.gender === '' ? this.userProfile.gender : this.FormUser.value.gender,
      title: this.FormUser.value.title === '' ? this.userProfile.title : this.FormUser.value.title
    };
    this.router.navigate(["/home/user"]);
    // @ts-ignore
    this.updateUserProfile(this.userProfile.id);
    alert('Thành công!');
    this.router.navigate(['/home/user']);
  }

  get email() {
    return this.FormUser.get('email');
  }
  get phone() {
    return this.FormUser.get('phone');
  }
  get username() {
    return this.FormUser.get('username');
  }
}
