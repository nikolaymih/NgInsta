import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces/IUser';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | undefined;

  constructor(
    private http: HttpClient
  ) { }

  register(data: { email: string; username: string; password: string }) {
    return this.http.post<IUser>(`${apiUrl}auth/register`, data, { withCredentials: true }).pipe(
      tap(user => this.user = user)
    );
  }
}
