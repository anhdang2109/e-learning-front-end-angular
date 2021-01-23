import {Component, OnInit} from '@angular/core';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";
import {Quiz} from './model/quiz.model';
import {QuizService} from './service/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  role: string;
  users: User[];
  currentUsername: string;
  quizzes: Quiz[];
  p: number = 1;

  constructor(private userService: UserService,
              private router: Router,
              private quizService: QuizService
  ) {}

  ngOnInit() {
    this.role = localStorage.getItem("ROLE");
    if (this.role == "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");

    this.quizService.getAll().toPromise().then(value => {
      this.quizzes = value;
      console.log(value);
      console.log(this.quizzes);
    });
  }
  delete(id: any) {
    if (confirm('Bạn đã chắc chắn?')) {
      this.quizService.deleteById(id).subscribe(value => {
        console.log('Delete', value);
        this.quizService.getAll().toPromise().then(value1 => {
          this.quizzes = value1;
        });
      });
    }
  }
}
