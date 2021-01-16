import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../authentication/service/auth/auth.service";
import {User} from "../user.model";
import firebase from "firebase";
import {UserToken} from "../user-token";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  arrayPicture = '';

  successMessage = '';
  failMessage = '';
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    // confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    title: new FormControl('', [Validators.required]),
    imageSource: new FormControl(''),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    let user = this.setNewUser();
    this.authService.register(user).subscribe(() => {
      alert('Đăng ký thành công');
      this.registerForm.reset();
      this.router.navigate(['/admin/users']);
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
      imageSource: this.arrayPicture,
      title: this.registerForm.value.title,
      email: this.registerForm.value.email,
      phone: this.registerForm.value.phone,
      gender: this.registerForm.value.gender,
    };
    return user;
  }
  saveImg(value) {
    const file = value.target.files;
    const metadata = {
      contentType: 'image/jpeg',
    };
    const uploadTask = firebase.storage().ref('img/' + Date.now()).put(file[0], metadata);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.arrayPicture += downloadURL + ' ';
          console.log(this.arrayPicture);
        });
      }
    );
  }
}
