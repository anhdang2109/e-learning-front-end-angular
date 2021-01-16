import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {environment} from '../../../../environments/environment';


const USER_API_ENDPOINT: string = environment.API_ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {
  }

  logout(): void {
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.API);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + `/delete/+${id}`);
  }

  update(user: User): Observable<any> {
    return this.http.put<User>(this.API  + `/edit/${user.id}`, user);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.API + `/` + `${id}`);
  }
}
