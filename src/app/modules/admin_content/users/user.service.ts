import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {environment} from '../../../../environments/environment';


// const USER_API_ENDPOINT: string = environment.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'https://quizzes2501.herokuapp.com/users';

  constructor(private http: HttpClient) {
  }

  logout(): void {
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.API);
  }

  getAllUserDeleted(): Observable<any> {
    return this.http.get(this.API + `/isdeleted`);
  }

  delete(id: number): Observable<any> {
    // @ts-ignore
    return this.http.put(this.API + `/delete/${id}`);
  }
  deleted(id: number): Observable<any> {
    // @ts-ignore
    return this.http.put(this.API + `/deleted/${id}`);
  }

  getUserByUsername(username: any): Observable<any> {
    return this.http.get('https://quizzes2501.herokuapp.com/' + `${username}`);
  }

  update(user: User): Observable<any> {
    return this.http.put<User>(this.API + `/edit/${user.id}`, user);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(this.API + `/` + `${id}`);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.API + '/login', user);
  }

  changePassword(user: User,  id: number): Observable<User> {
    return this.http.put<User>(this.API + `/new-password/${id}`, user);
  }

}
