import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../authentication/service/auth/auth.service";
import {User} from "../user.model";
import firebase from "firebase";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User;
  arrayPicture = '';
  createForm: FormGroup;
  currentUser: User;

  constructor(
    private  router: Router,
    // private db: AngularFireDatabase,
    private fb: FormBuilder,
    // private studiesService: StudiesService,
    private authenticationService: AuthService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.createForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      title: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }

  setNewUser() {
    this.user = {
      username: this.createForm.get('username').value,
      password: this.createForm.get('password').value,
      // categoryHouse: this.categoryHouse,
      title: this.createForm.get('title').value,
      gender: this.createForm.get('gender').value,
      email: this.createForm.get('email').value,
      phone: this.createForm.get('phone').value,
      imageSource: this.arrayPicture
    };
  }

  returnHome() {
    this.router.navigate(['/']);
  }

  createUser() {
    this.authenticationService.currentUser.subscribe(value => {
      // this.setCategoryForFormData();
      this.setNewUser();
      this.userService.userDetail(value.id + '').subscribe(result => {
        this.user.username = result.username;
        this.currentUser = result;
        console.log(this.user);
        this.userService.create(this.currentUser.id, this.user).subscribe(() => {
          alert('Thêm thành công!');
          this.returnHome();
        }, error1 => {
          console.log('Lỗi ' + error1);
        });
      });
    });
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
