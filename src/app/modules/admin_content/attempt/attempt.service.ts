import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Attempt} from './attempt.model';

@Injectable({
  providedIn: 'root'
})
export class AttemptService {
  constructor(private http: HttpClient) {
  }

  update(product: Attempt, id: number): Observable<any> {
      return this.http.put(`http://localhost:8080/admin/attempts/${id}`, product);
  }

  save(product: Attempt): Observable<any> {
    return this.http.post(`http://localhost:8080/admin/attempts/`, product);
  }

  findById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/admin/attempts/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/admin/attempts/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/admin/attempts');
  }
}
