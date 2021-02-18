import {Component, OnInit} from '@angular/core';
import {Study} from '../model/study.model';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {StudyService} from '../service/study.service';
import {User} from '../../users/user.model';
import {UserService} from '../../users/user.service';
import {Quiz} from '../../quizzes/model/quiz.model';
import {QuizService} from '../../quizzes/service/quiz.service';

@Component({
  selector: 'app-study-create',
  templateUrl: './study-create.component.html',
  styleUrls: ['./study-create.component.css']
})
export class StudyCreateComponent implements OnInit {
  study: Study = {
    description: '',
    email: '',
    userID: 0
  };
  assignedQuiz: Quiz = {
    id: 8,
    quizname: ''
  };
  assignedUser: User = {
    id: 33,
    username: '',
    email: 'dangtrannamanh2109@gmail.com'
  };
  email: string;
  userExist: boolean = false;
  users: User[];
  quizzes: Quiz[];
  role: string;
  currentUsername: string;
  constructor(private studyService: StudyService,
              private quizService: QuizService,
              private userService: UserService,
              private http: HttpClient,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUser().toPromise().then(data => {
      this.users = data;
      console.log(data);
      console.log(this.users);
    });
    this.quizService.getAll().toPromise().then(value => {
      this.quizzes = value;
      console.log(value);
      console.log(this.quizzes);
    });
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER" || this.role == null) {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }
  findUser(){
    if (this.checkUserExisted() != null){
      this.assignedUser = this.checkUserExisted();
      this.userExist = true;
    }
    else {
      alert("No user found");
    }
  }
  checkUserExisted(): User {
    for (const user of this.users) {
      if (user.email === this.email){
        return user;
      }
    }
    return null;
  }

  create() {
    if (this.userExist === true) {
      console.log(this.assignedQuiz);
      console.log(this.assignedUser);
      this.study.quiz = this.assignedQuiz;
      this.study.userID = this.assignedUser.id;
      console.log(this.study);
      this.studyService.save(this.study).subscribe(() => {
        alert('successfully');
        this.router.navigate(['/admin/studies']);
      });
    }
    else {
      alert("Please input user");
    }

  }
  delete(){
    this.userExist = false;
  }
}
