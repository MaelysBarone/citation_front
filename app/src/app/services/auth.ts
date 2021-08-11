import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = environment.apiURL + "/auth";
  constructor(private http: HttpClient) { }

  signUp(user:User): Observable<any> {
    console.log(user)
    return this.http.post<any>(this.baseURL + "/signup", user);
  }
}
