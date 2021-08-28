import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPicture } from '../shared/interfaces/IPicture';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  images: IPicture[] | undefined;

  constructor(
    private http: HttpClient
  ) { }

  loadPosts() {
    const token = localStorage.getItem('token');

    let headers = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<IPicture[]>(`${apiUrl}img`, headers).pipe(
      tap(images => this.images = images)
    )
  }

  loadMorePosts(seenIds: IPicture[]) {
    const token = localStorage.getItem('token');

    let headers = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(`${apiUrl}img/loadResources`, { seenIds }, headers)
  }

  loadSpecifiedPicture(id: string) {
    const token = localStorage.getItem('token');

    let headers = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

    return this.http.post<any>(`${apiUrl}img/detailedImage`, { id }, headers)
  }

  uploadImage(data: { image: string; description: string; id: string }) {
    const token = localStorage.getItem('token');

    let headers = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(`${apiUrl}img/createImg`, data, headers)
  }
}
