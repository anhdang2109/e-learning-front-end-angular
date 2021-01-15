import { Injectable } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Study} from "../study.model";
import {Observable} from "rxjs";

const API = environment.API_FAKE;

@Injectable({
  providedIn: 'root'
})

export class StudyService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Study[]> {
    return this.httpClient.get<Study[]>(API + '/studies');
  }

  getById(id: string | null): Observable<Study> {
    return this.httpClient.get<Study>(API + `/${id}`);
  }

  create(study: Study): Observable<Study> {
    return this.httpClient.post<Study>(API, study);
  }

  deleteById(id: string): Observable<Study> {
    return this.httpClient.delete<Study>(API + `/${id}`);
  }

  updateById(id: string, study: Study): Observable<Study> {
    return this.httpClient.put<Study>(API + `/${id}`, study);
  }

  getAPI(): string {
    return API;
  }
}
