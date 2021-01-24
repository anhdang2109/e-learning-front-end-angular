import {Component, OnInit} from '@angular/core';
import {QuestionService} from './question.service';
import {Question} from './questions.model';
import {User} from '../users/user.model';
import {UserService} from '../users/user.service';
import {Router} from '@angular/router';
import {QuestionSearch} from './questionSearch.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  viewPool: Question[] = [];
  searchPool: Question[] = [];
  filterTypePool: Question[] = [];
  filterLevelPool: Question[] = [];
  filterCategoryPool: Question[] = [];
  search: QuestionSearch = {
    code: '',
    type: null,
    level: null,
    categoryID: null
  };
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
      this.questions = value;
      this.viewPool = value;
      console.log(value);
      console.log(this.questions);
      console.log(this.viewPool);
    });
    this.role = localStorage.getItem('ROLE');
    if (this.role === 'ROLE_USER') {
      alert('Bạn không có quyền!');
      this.router.navigate(['/home']);
    }
    this.currentUsername = localStorage.getItem('USERNAME');
  }

  onDelete(id) {
    console.log(id);
    if (confirm('Bạn có chắc chắn?')) {
      console.log('hello');
      this.questionService.deleteById(id).toPromise().then(value => {
        console.log('Delete', value);
        this.router.navigate(['/admin/questions']);
      });
    }
  }


  filterQuestion() {
    console.log(this.search);
    if ( this.search.code != null || this.search.code !== '') {
      for (const searchedQuestion of this.questions) {
        if (searchedQuestion.code === this.search.code) {
          this.searchPool.push(searchedQuestion);
        }
      }
    }else {
      this.searchPool = this.questions;
    }
    if (this.search.type != null) {
      for (const selectedTypeQuestion of this.searchPool) {
        if (selectedTypeQuestion.type === this.search.type) {
          this.filterTypePool.push(selectedTypeQuestion);
        }
      }
    } else {
      this.filterTypePool = this.searchPool;
    }
    console.log(this.searchPool);
    if (this.search.level != null) {
      for (const selectedLevelQuestion of this.filterTypePool) {
        if (selectedLevelQuestion.level === this.search.level) {
          this.filterLevelPool.push(selectedLevelQuestion);
        }
      }
    } else {
      this.filterLevelPool = this.filterTypePool;
    }
    if (this.search.categoryID != null) {
      for (const selectedCategoryQuestion of this.filterLevelPool) {
        if (selectedCategoryQuestion.category.id === this.search.categoryID) {
          this.filterCategoryPool.push(selectedCategoryQuestion);
        }
      }
    } else {
      this.filterCategoryPool = this.filterLevelPool;
    }
    this.viewPool = this.filterCategoryPool;
    console.log(this.viewPool);
  }
}


