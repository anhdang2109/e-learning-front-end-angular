import {Component, OnInit} from '@angular/core';
import {QuestionService} from './question.service';
import {Question} from './questions.model';
import {User} from "../users/user.model";
import {UserService} from "../users/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  products: Question[];
  role: string;
  users: User[];
  currentUsername: string;
  p: number = 1;

  constructor(private questionService: QuestionService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.questionService.getAll().toPromise().then(value => {
      this.products = value;
      console.log(value);
      console.log(this.products);
    });
    this.role = localStorage.getItem("ROLE");
    if (this.role === "ROLE_USER") {
      alert("Bạn không có quyền!");
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem("USERNAME");
  }

  onDelete(id) {
    console.log(id);
    if (confirm("Are you sure?")){
      console.log("hello");
      this.questionService.deleteById(id).toPromise().then(value => {
        console.log('Delete', value);
        this.router.navigate(['/admin/questions']);
      });
    }
  }
}


