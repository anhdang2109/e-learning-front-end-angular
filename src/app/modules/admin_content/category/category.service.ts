import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "./category.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = environment.API_ENDPOINT + '/admin/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL);
  }
  create(category: Category): Observable<any> {
    return this.http.post<Category>(this.API_URL, category);
  }
}
