import {Component, OnInit} from '@angular/core';
import {QuestionService} from './question.service';
import {Question} from './questions.model';
import {User} from '../users/user.model';
import {UserService} from '../users/user.service';
import {Router} from '@angular/router';
import {QuestionSearch} from './questionSearch.model';
import {CategoryService} from '../category/category.service';
import {Category} from '../category/category.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];
  categories: Category[];
  viewPool: Question[] = [];
  searchPool: Question[] = [];
  filterTypePool: Question[] = [];
  filterLevelPool: Question[] = [];
  filterCategoryPool: Question[] = [];
  search: QuestionSearch = {
    code: '',
    type: 'unknown',
    level: 'unknown',
    categoryID: 0
  };
  role: string;
  users: User[];
  currentUsername: string;
  p: number = 1;

  constructor(private questionService: QuestionService,
              private userService: UserService,
              private categoryService: CategoryService,
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
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
      console.log(data);
    }, error => {
      console.log('lỗi: ');
      console.log(error);
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
      this.questionService.deleteById(id).toPromise().then(value => {
        console.log('ket qua');
        console.log(value);
        if (value === null) {
          alert('Khong the xoa vi cau hoi da duoc gan');
        } else {
          alert('thanh cong');
        }
        this.questionService.getAll().toPromise().then(value1 => {
          this.questions = value1;
          this.viewPool = value1;
        });
      });
    }
  }


  filterQuestion() {
    console.log("search", this.search);
    console.log("questions", this.questions);
    this.searchPool = [];
    this.viewPool = [];
    this.searchPool = [];
    this.filterTypePool = [];
    this.filterLevelPool = [];
    this.filterCategoryPool = [];
    if (this.search.code != null || this.search.code !== '') {
      for (const searchedQuestion of this.questions) {
        if (searchedQuestion.code.toLowerCase().includes(this.search.code.toLowerCase())) {
          this.searchPool.push(searchedQuestion);
        }
      }
    } else {
      this.searchPool = this.questions;
    }
    console.log("searchPool", this.searchPool);
    if (this.search.type !== 'unknown') {
      for (const selectedTypeQuestion of this.searchPool) {
        if (selectedTypeQuestion.type === this.search.type) {
          this.filterTypePool.push(selectedTypeQuestion);
        }
      }
    } else {
      this.filterTypePool = this.searchPool;
    }
    console.log(this.searchPool);
    if (this.search.level !== 'unknown') {
      for (const selectedLevelQuestion of this.filterTypePool) {
        if (selectedLevelQuestion.level === this.search.level) {
          this.filterLevelPool.push(selectedLevelQuestion);
        }
      }
    } else {
      this.filterLevelPool = this.filterTypePool;
    }
    if ( +this.search.categoryID !== 0) {
      for (const selectedCategoryQuestion of this.filterLevelPool) {
        if (selectedCategoryQuestion.category.id === +this.search.categoryID) {
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


