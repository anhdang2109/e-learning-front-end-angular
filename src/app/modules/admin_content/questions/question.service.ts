import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from './questions.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private http: HttpClient) {
  }

  update(product: Question, id: number): Observable<any> {
    if (!!product.id) {
      return this.http.put(`http://localhost:8080/admin/question/${id}`, product);
    }
    return this.http.post(`http://localhost:8080/admin/question`, product);
  }

  save(product: Question): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/question`, product);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/admin/question/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/admin/question/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/admin/question');
  }
}
