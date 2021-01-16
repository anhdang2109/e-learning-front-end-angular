import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quiz} from "../model/quiz.model";
const API = environment.API_FAKE;
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Quiz[]> {
    return this.httpClient.get<Quiz[]>(API + '/quizzes');
  }

  getById(id: string): Observable<Quiz> {
    return this.httpClient.get<Quiz>(API + `/quizzes/${id}`);
  }

  create(quiz: Quiz): Observable<Quiz> {
    return this.httpClient.post<Quiz>(API, quiz);
  }

  deleteById(id: string): Observable<Quiz> {
    return this.httpClient.delete<Quiz>(API + `/quizzes/${id}`);
  }

  updateById(id: string, quiz: Quiz): Observable<Quiz> {
    return this.httpClient.put<Quiz>(API + `/quizzes/${id}`, quiz);
  }
}
