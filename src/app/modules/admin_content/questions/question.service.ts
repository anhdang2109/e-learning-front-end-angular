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
      return this.http.put(`http://localhost:3000/questions/${id}`, product);
    }
    return this.http.post(`http://localhost:3000/questions`, product);
  }

  save(product: Question): Observable<any> {
    return this.http.post(`http://localhost:3000/questions`, product);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/questions/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/questions/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/questions');
  }
}
