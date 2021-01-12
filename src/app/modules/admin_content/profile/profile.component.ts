// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//
//   avatarUrl: string = 'assets/img/default-avatar.jpg';
//
//   profileForm = this.fb.group({
//     name: ['', [ Validators.required, Validators.minLength(4)]],
//     birthday: [''],
//     phone: ['', Validators.required],
//     bio: [''],
//   });
//
//   constructor(private fb: FormBuilder) { }
//
//   ngOnInit(): void {
//   }
//
//   onFileChange(event): void {
//     const files = event.target.files;
//     const reader = new FileReader();
//
//     if (files && files.length) {
//       const file = event.target.files[0];
//       reader.readAsDataURL(file);
//
//       reader.onload = () => {
//         this.avatarUrl = reader.result.toString();
//       };
//     }
//   }
//   updateProfile(): void {
//     console.log(this.profileForm.value);
//   }
//
// }
