import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Study} from "../model/study.model";
import {Observable} from "rxjs";
import {Attempt} from '../../attempt/attempt.model';

// const API = environment.API_FAKE;

@Injectable({
  providedIn: 'root'
})

export class StudyService {

  constructor(private http: HttpClient) {
  }

  update(product: Study, id: number): Observable<any> {
    return this.http.put(`https://quizzes2501.herokuapp.com/admin/studies/${id}`, product);
  }

  save(product: Study): Observable<any> {
    return this.http.post(`https://quizzes2501.herokuapp.com/admin/studies`, product);
  }

  addAttempt(product: Study): Observable<any> {
    return this.http.post(`https://quizzes2501.herokuapp.com/admin/studies/addAttempt`, product);
  }

  findById(id: any): Observable<any> {
    return this.http.get(`https://quizzes2501.herokuapp.com/admin/studies/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`https://quizzes2501.herokuapp.com/admin/studies/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`https://quizzes2501.herokuapp.com/admin/studies`);
  }

  getStudyById(userId: any, quizId: any): Observable<any> {
    return this.http.get(`https://quizzes2501.herokuapp.com/admin/studies/${userId}/${quizId}`);
  }

}
