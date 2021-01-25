import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "./category.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = 'https://quizzes2501.herokuapp.com/admin/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.API_URL);
  }
  create(category: Category): Observable<any> {
    return this.http.post<Category>(this.API_URL, category);
  }
  getById(id: any): Observable<Category> {
    // @ts-ignore
    return this.http.get<Category>(this.API_URL + `/${id}`);
  }
  delete(id: string, category: Category): Observable<Category> {
    // @ts-ignore
    return this.http.delete(this.API_URL + `/${id}`, category);
  }
  update( category: Category): Observable<any> {
    // @ts-ignore
    return this.http.put<Category>(this.API_URL + `/${category.id}`, category);
  }
}
