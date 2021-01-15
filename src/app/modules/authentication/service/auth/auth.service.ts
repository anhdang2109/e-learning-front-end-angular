import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';
import {environment} from "../../../../../environments/environment";
import {UserToken} from "../../../admin_content/users/user-token";
import {User} from "../../../admin_content/users/user.model";

const API_URL = `${environment.API_ENDPOINT}`;
const CREATE: string = environment.CREATE;
const UPDATE: string = environment.UPDATE;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  update = new EventEmitter<string>();
  private currentUserSubject: BehaviorSubject<UserToken>;
  public currentUser: Observable<UserToken>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserToken {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post(API_URL + '/login', {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.update.emit('login');
        return user;
      }));
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}