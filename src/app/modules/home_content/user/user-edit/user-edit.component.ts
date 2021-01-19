import {Component, OnInit} from '@angular/core';
import {UserToken} from "../../../admin_content/users/user-token";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../admin_content/users/user.service";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";

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
  FormUser: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private activate: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.FormUser = this.fb.group({
      imageSource: [''],
      username: [''],
      email: [''],
      password: [''],
      gender: [''],
      title: [''],
      phone: [''],

    });
    this.activate.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log("id" + this.id);
      this.userService.getUserById(this.id).subscribe(result => {
        this.user = result;
        this.FormUser.patchValue({
          // imageSource: this.user.imageSource,
          username: this.user.username,
          email: this.user.email,
          password: this.user.password,
          gender: this.user.gender,
          title: this.user.title,
          phone: this.user.phone,

        });
        console.log(result);
      });
    });
  }

  // tslint:disable-next-line:typedef
  updateUser() {
    if (!this.FormUser.invalid) {
      // this.user.imageSource = this.FormUser.value.imageSource;
      this.user.username = this.FormUser.value.username;
      this.user.email = this.FormUser.value.email;
      this.user.password = this.FormUser.value.password;
      this.user.gender = this.FormUser.value.gender;
      this.user.title = this.FormUser.value.title;
      this.user.phone = this.FormUser.value.phone;
    }
    this.userService.update(this.user).subscribe(result => {
      alert('cập nhập thành công!');
      this.router.navigate(['/home/user']);
    }, error => {
      console.log(error);
    });
  }

}
