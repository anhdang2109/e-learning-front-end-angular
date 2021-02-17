import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from './questions.model';
import {Observable} from 'rxjs';
import {QuestionSearch} from './questionSearch.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) {
  }

  update(product: Question, id: number): Observable<any> {
      return this.http.put(`http://localhost:8080/admin/question/${id}`, product);
  }

  save(product: Question): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/question`, product);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/admin/question/${id}`);
  }
  searchQuestion(search: QuestionSearch): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/question/searchByCode`, search);
  }

  filterQuestion(search: QuestionSearch): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/question/filter`, search);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/admin/question/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/admin/question');
  }
}
