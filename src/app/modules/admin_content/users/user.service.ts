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

  constructor(private http: HttpClient) {
  }

  logout(): void {
  }

  getUsers(): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(USER_API_ENDPOINT + '/users', {observe: 'response'});
  }
}
