import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FlickerServicesService {
  constructor(private http: HttpClient) {}

  getFlickrData(): Observable<any> {
    const flickrApiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=&format=json&nojsoncallback=1';

    return this.http.jsonp(flickrApiUrl, 'JSONP_CALLBACK').pipe(
      map(response => response)
    );
  }
}


@Component({
  selector: 'app-http-client-module',
  templateUrl: './http-client-module.component.html',
  styleUrl: './http-client-module.component.scss'
})
export class HttpClientModuleComponent {

}
