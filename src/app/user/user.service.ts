import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPicture } from '../shared/interfaces/IPicture';
import { IProfilePicture } from '../shared/interfaces/IProfilePicture';
import { IUser } from '../shared/interfaces/IUser';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | undefined;
  token = localStorage.getItem('token')

  constructor(
    private http: HttpClient
  ) { }

  profile() {
    console.log(this.token);

    let headers = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    };

    return this.http.get<IProfilePicture>(`${apiUrl}img/personalData`, headers)
  }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}auth/login`, data, { withCredentials: true }).pipe(
      tap(user => {
        console.log(user);
        
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", user.username);
        localStorage.setItem("id", user._id);
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
