import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPicture } from '../shared/interfaces/IPicture';
import { IUser } from '../shared/interfaces/IUser';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | undefined;
  token = localStorage.getItem("user")

  constructor(
    private http: HttpClient
  ) { }

  profile() {
    let headers = {
      headers: new HttpHeaders({
          'Authorization': `Bearer ${this.token}`
        })};

    return this.http.get<IPicture[]>(`${apiUrl}img/personalData`, headers)
  }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}auth/login`, data, { withCredentials: true }).pipe(
      tap(user => {
        localStorage.setItem("user", JSON.stringify(user));
        this.user = user
      })
    );
  }

  register(data: { email: string; username: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}auth/register`, data, { withCredentials: true }).pipe(
      tap(user => {
        this.user = user
      })
    );
  }
}
