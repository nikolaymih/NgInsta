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

  user: string | undefined;
  

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) {
    try {
      const localStorageUser = localStorage.getItem('user' || 'ERROR');
      console.log(localStorageUser);
      
      this.user = localStorageUser!;
      
    } catch (error) {
      this.user = undefined;
    }
   }

  profile() {
    let token = localStorage.getItem('token')

    let headers = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.get<IProfilePicture>(`${apiUrl}img/personalData`, headers)
  }

  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}auth/login`, data, { withCredentials: true }).pipe(
      tap(user => {
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", user.username);
        localStorage.setItem("id", user._id);
        this.user = user.username;
      })
    );
  }

  register(data: { email: string; username: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}auth/register`, data, { withCredentials: true })
    // .pipe(
    //   tap(user => {
    //     this.user = user
    //   })
    // );
  }

  logout(): void {
    this.user = undefined;
  }
}
