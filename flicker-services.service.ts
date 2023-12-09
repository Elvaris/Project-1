import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = 'f1df8074037924fe96127e022dbd5896';
  private perPage = 20;

  constructor(private http: HttpClient) {}

  getImages(page: number): Observable<any> {
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.apiKey}&format=json&nojsoncallback=1&per_page=${this.perPage}&page=${page}`;
    return this.http.get<any>(apiUrl);
  }
}

//   searchImages(query: string): Observable<any> {
//     return this.http.get<any>(`https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1=${query}`);
//   }
//   Images(): Observable<any> {
//     return this.http.get<any>('https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1');
//   }
//   constructor(private http: HttpClient) { }
//   flickr(){
//     return this.http.get(
//       'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
//     )
//   }
// }